import { FC, useEffect, useRef, useState } from 'react'
import styles from './player.module.scss'
import { Controlls, Spinner } from '@/components'
import { IPlayerProps } from './Player.props'

export const Player: FC<IPlayerProps> = ({
	src,
	autoPlay,
	movieName,
	muted,
	poster,
	controls = true,
	full,
	loop,
	screenHandler,
}) => {
	const [isPlaying, setIsPlaying] = useState(false)
	const [isWaiting, setIsWaiting] = useState(false)
	const [durationSec, setDurationSec] = useState(0)
	const [elapsedSec, setElapsedSec] = useState(0)
	const [isMuted, setIsMuted] = useState(false)
	const [load, setLoad] = useState(true)

	const videoRef = useRef<HTMLVideoElement>(null)
	const bufferRef = useRef<HTMLDivElement>(null)
	const progressRef = useRef<HTMLDivElement>(null)
	const rightRewindRef = useRef<HTMLDivElement>(null)
	const leftRewindRef = useRef<HTMLDivElement>(null)
	const playerRef = useRef<HTMLDivElement>(null)
	const volumeRef = useRef<HTMLInputElement>(null)
	const videoApi = videoRef.current

	useEffect(() => {
		if (!videoRef.current) return
		if (!playerRef.current) return
		if (full) {
			fullScreenHandler()
		}

		if (autoPlay) {
			videoApi?.play()
		} else {
			videoApi?.pause()
		}

		const handler = () => {
			if (document.fullscreenElement && document.fullscreenElement !== null) {
				screenHandler(false)
			}
		}
		document.addEventListener('fullscreenchange', handler)

		return () => {
			document.removeEventListener('fullscreenchange', handler)
		}
	}, [autoPlay, full])

	const onPlay = () => {
		if (isWaiting) setIsWaiting(false)
		setIsPlaying(true)
	}

	const onPause = () => {
		if (isWaiting) setIsWaiting(false)
		setIsPlaying(false)
	}

	const onWaiting = () => {
		if (isPlaying) setIsPlaying(false)
		setIsWaiting(true)
	}

	const onTimeUpdate = () => {
		if (!videoApi) return
		if (!progressRef.current) return
		if (isWaiting) setIsWaiting(false)
		const { currentTime, duration } = videoApi
		const progress = currentTime / duration
		setDurationSec(duration)
		setElapsedSec(currentTime)
		const width = progress * 100
		progressRef.current.style.width = `${width}%`
	}

	const onProgress = () => {
		if (!videoApi) return
		if (!videoApi.buffered.length || !bufferRef.current) return
		const { duration } = videoApi
		const bufferdEnd = videoApi.buffered.end(videoApi.buffered.length - 1)
		if (bufferRef && duration > 0) {
			const width = (bufferdEnd / duration) * 100
			bufferRef.current.style.width = `${width}%`
		}
	}
	const seekToPostion = (e: React.MouseEvent<HTMLDivElement>) => {
		if (!videoApi) return

		const { left, width } = e.currentTarget.getBoundingClientRect()
		const clickPos = (e.clientX - left) / width
		if (clickPos < 0 || clickPos > 1) return

		const durationMs = videoApi.duration * 1000
		const newElapsedTimeMs = durationMs * clickPos
		const newTimeSec = newElapsedTimeMs / 1000
		videoApi.currentTime = newTimeSec
	}

	const changeVolume = (value: any) => {
		if (!videoRef.current) return
		videoRef.current.volume = value / 100
	}

	const rewindLeft = () => {
		if (!videoApi) return
		videoApi.currentTime += -3
	}

	const rewindRight = () => {
		if (!videoApi) return
		videoApi.currentTime += 3
	}

	const fullScreenHandler = () => {
		if (!playerRef.current) return
		if (!document.fullscreenElement) {
			playerRef.current.requestFullscreen().catch((err) => {
				alert(
					`Ошибка переключения видео в полный экран: ${err.message} (${err.name})`
				)
			})
		} else {
			document.exitFullscreen()
			screenHandler(false)
		}
	}

	const mutedHandler = (value: number) => {
		if (value === 0) {
			setIsMuted(true)
		} else {
			setIsMuted(false)
		}
	}

	const playPauseHandler = () => {
		if (!isPlaying) {
			videoRef.current?.play()
			setIsPlaying(true)
		} else {
			videoRef.current?.pause()
			setIsPlaying(false)
		}
	}

	const loadedMetaData = () => {
		if (!videoApi) return
		if (!progressRef.current) return
		setIsPlaying(true)
		videoApi
		const progress = videoApi.currentTime / videoApi.duration
		setDurationSec(videoApi.duration)
		setElapsedSec(videoApi.currentTime)
		const width = progress * 100
		progressRef.current.style.width = `${width}%`
	}
	return (
		<div className={styles.player} ref={playerRef}>
			<div
				className={styles.player_poster}
				style={{
					backgroundImage: `url(${poster})`,
					opacity: isPlaying ? 0 : 1,
				}}
			>
				<h1>{movieName}</h1>
			</div>
			{isWaiting && (
				<div className={styles.player_loader}>
					<Spinner />
				</div>
			)}
			<div className={styles.player_rewindWrapp}>
				<div
					className={styles.player_rewind}
					ref={leftRewindRef}
					onDoubleClick={rewindLeft}
				></div>
				<div
					className={styles.player_rewind}
					ref={rightRewindRef}
					onDoubleClick={rewindRight}
				></div>
			</div>
			{/* {load ? (
				<div className={styles.player_loader}>
					<Spinner />
				</div>
			) : (
				
			)} */}
			<video
				muted={muted}
				loop={loop}
				ref={videoRef}
				src={src}
				onClick={playPauseHandler}
				onPlaying={loadedMetaData}
				onProgress={onProgress}
				onPlay={onPlay}
				onPlayingCapture={onPlay}
				onTimeUpdate={onTimeUpdate}
				onPause={onPause}
				onWaiting={onWaiting}
			></video>
			<div className={styles.player_controls}>
				<Controlls
					bufferRef={bufferRef}
					changeVolume={changeVolume}
					durationSec={durationSec}
					elapsedSec={elapsedSec}
					fullScreenHandler={fullScreenHandler}
					isMuted={isMuted}
					isPlaying={isPlaying}
					mutedHandler={mutedHandler}
					playPauseHandler={playPauseHandler}
					progressRef={progressRef}
					seekToPostion={seekToPostion}
					volumeRef={volumeRef}
				/>
			</div>
		</div>
	)
}
