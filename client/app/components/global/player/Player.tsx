'use client'
import { FC, useEffect, useRef, useState } from 'react'
import styles from './Player.module.scss'
import { usePlayerContext } from '@/app/hooks'
import classNames from 'classnames'
import { ButtonComponent } from '../button/ButtonComponent'

export const PlayerComponent: FC = () => {
	const { active, state, poster, closeHandler } = usePlayerContext()
	const videoApi = useRef<HTMLVideoElement>(null)
	const videoOptions = videoApi.current
	const [playing, setPlaying] = useState(false)
	const [seconds, setSeconds] = useState(0)
	const [currentTime, setCurrentTime] = useState(0)
	const [endTime, setEndTime] = useState(0)
	const [progressTime, setProgressTime] = useState(0)

	const playPause = () => {
		if (!playing) {
			videoOptions?.play()
			setPlaying(true)
			formateTime(
				Number(videoOptions?.currentTime),
				Number(videoOptions?.duration)
			)
			console.log(videoOptions?.onprogress)
		} else {
			videoOptions?.pause()
			setPlaying(false)
		}
	}
	const formateTime = (currentTime: number, duration: number) => {
		const time = currentTime - (duration / 100) * 5
		let curr = (currentTime / duration) * 100
		let endTime = duration
		setSeconds(Math.round(time))
		setCurrentTime(Math.floor(curr))
		setEndTime(endTime)
	}
	const videoProgressTime = () => {}
	return (
		<div
			className={classNames(styles.player, {
				[styles.active]: active,
			})}
		>
			PlayerComponent
			<div className={styles.player_wrap}>
				<div className={styles.player_top}>
					<div className={styles.player_logo}>
						<svg
							width='121'
							height='28'
							viewBox='0 0 121 28'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<circle
								cx='45.7674'
								cy='13.644'
								r='10.7986'
								stroke='white'
								strokeWidth='5'
							/>
							<circle
								cx='78.5828'
								cy='13.644'
								r='10.7986'
								stroke='white'
								strokeWidth='5'
							/>
							<path
								d='M81.959 13.287C82.6257 13.6719 82.6257 14.6342 81.959 15.0191L77.4231 17.6378C76.7564 18.0227 75.9231 17.5416 75.9231 16.7718L75.9231 11.5342C75.9231 10.7644 76.7564 10.2833 77.4231 10.6682L81.959 13.287Z'
								fill='white'
							/>
							<path
								d='M0 26.8045V0.345417H0.0345416L12.9186 18.618L26.1136 0.345417H26.1827V26.8045H21.1741V14.6803L12.8841 26.459H12.815L4.83586 15.4402V26.8045H0Z'
								fill='white'
							/>
							<path
								d='M120.862 27.4608L103.073 11.3988L103.176 26.4245H98.0986V0H98.3059L116.06 16.3037L115.957 1.00171H121V27.4608H120.862Z'
								fill='white'
							/>
						</svg>
					</div>
					<div className={styles.player_close} onClick={() => closeHandler()}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='1.83008'
								width='19'
								height='2.58824'
								rx='1.29412'
								transform='rotate(45 1.83008 0)'
								fill='#ACACAC'
							/>
							<rect
								y='13.4351'
								width='19'
								height='2.58824'
								rx='1.29412'
								transform='rotate(-45 0 13.4351)'
								fill='#ACACAC'
							/>
						</svg>
						<span>close</span>
					</div>
				</div>
				<div className={styles.video}>
					{/* <div className={styles.player_video__poster}>
						<img src={poster} alt='poster' />
					</div> */}
					<video src={state} ref={videoApi}></video>
					<div className={styles.video_panel}>
						<div className={styles.video_content}>
							<div className={styles.video_buttons}>
								{!playing ? (
									<button onClick={playPause}>
										<svg
											width='19'
											height='20'
											viewBox='0 0 19 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M17.409 7.35331C17.8893 7.60872 18.291 7.99 18.5712 8.45629C18.8514 8.92259 18.9994 9.45632 18.9994 10.0003C18.9994 10.5443 18.8514 11.078 18.5712 11.5443C18.291 12.0106 17.8893 12.3919 17.409 12.6473L4.597 19.6143C2.534 20.7363 0 19.2763 0 16.9683V3.03331C0 0.723308 2.534 -0.735693 4.597 0.385307L17.409 7.35331Z'
												fill='white'
											/>
										</svg>
									</button>
								) : (
									<button onClick={playPause}>
										<svg
											width='20'
											height='20'
											viewBox='0 0 20 20'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path
												d='M0 4C0 2.114 -5.96046e-08 1.172 0.586 0.586C1.172 -5.96046e-08 2.114 0 4 0C5.886 0 6.828 -5.96046e-08 7.414 0.586C8 1.172 8 2.114 8 4V16C8 17.886 8 18.828 7.414 19.414C6.828 20 5.886 20 4 20C2.114 20 1.172 20 0.586 19.414C-5.96046e-08 18.828 0 17.886 0 16V4ZM12 4C12 2.114 12 1.172 12.586 0.586C13.172 -5.96046e-08 14.114 0 16 0C17.886 0 18.828 -5.96046e-08 19.414 0.586C20 1.172 20 2.114 20 4V16C20 17.886 20 18.828 19.414 19.414C18.828 20 17.886 20 16 20C14.114 20 13.172 20 12.586 19.414C12 18.828 12 17.886 12 16V4Z'
												fill='white'
											/>
										</svg>
									</button>
								)}
							</div>
							<div className={styles.video_duration}>
								<span>
									{currentTime} / {endTime}
								</span>
							</div>
						</div>
						<div
							className={styles.video_progress}
							style={{ width: `${+Number(videoOptions?.onprogress?.length)}%` }}
						></div>
						<div className={styles.video_actions}>
							<div className={styles.video_actions_item}>
								<svg
									width='15'
									height='15'
									viewBox='0 0 19 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.50365 7.27699C8.83329 7.27699 8.20553 7.53629 7.73022 8.01017C7.25716 8.48405 6.99485 9.10993 6.99485 9.77828C6.99485 10.4466 7.25716 11.0725 7.73022 11.5464C8.20553 12.018 8.83329 12.2796 9.50365 12.2796C10.174 12.2796 10.8018 12.018 11.2771 11.5464C11.7501 11.0725 12.0124 10.4466 12.0124 9.77828C12.0124 9.10993 11.7501 8.48405 11.2771 8.01017C11.0449 7.77693 10.7686 7.59201 10.4642 7.46615C10.1597 7.34028 9.83322 7.27599 9.50365 7.27699ZM18.7474 12.5411L17.2812 11.2916C17.3507 10.8669 17.3865 10.4332 17.3865 10.0018C17.3865 9.5704 17.3507 9.13452 17.2812 8.71205L18.7474 7.46252C18.8582 7.36798 18.9375 7.24207 18.9747 7.10152C19.012 6.96097 19.0054 6.81245 18.9559 6.6757L18.9357 6.61758C18.5322 5.49254 17.9276 4.4497 17.1511 3.53958L17.1108 3.49264C17.0165 3.38211 16.8908 3.30266 16.7503 3.26475C16.6098 3.22684 16.4611 3.23226 16.3238 3.28029L14.5033 3.92629C13.8307 3.37641 13.0819 2.94276 12.2703 2.641L11.9183 0.743235C11.8917 0.60027 11.8222 0.468746 11.7188 0.366136C11.6155 0.263526 11.4833 0.194687 11.3398 0.168765L11.2793 0.157588C10.1135 -0.0525293 8.88485 -0.0525293 7.71901 0.157588L7.65848 0.168765C7.51498 0.194687 7.3828 0.263526 7.27948 0.366136C7.17616 0.468746 7.1066 0.60027 7.08004 0.743235L6.72581 2.64994C5.92189 2.95411 5.17298 3.3867 4.50847 3.93076L2.67451 3.28029C2.53722 3.23188 2.38841 3.22627 2.24784 3.2642C2.10728 3.30213 1.98162 3.3818 1.88757 3.49264L1.84721 3.53958C1.07213 4.45067 0.467642 5.49325 0.0625767 6.61758L0.0423987 6.6757C-0.0584914 6.95511 0.0244627 7.26805 0.250905 7.46252L1.73511 8.72546C1.66561 9.1457 1.63198 9.57487 1.63198 9.99958C1.63198 10.4288 1.66561 10.8579 1.73511 11.2737L0.255389 12.5366C0.144624 12.6312 0.0653488 12.7571 0.0281036 12.8976C-0.00914159 13.0382 -0.00259167 13.1867 0.0468826 13.3235L0.0670607 13.3816C0.472863 14.5059 1.07148 15.5453 1.85169 16.4596L1.89205 16.5065C1.98634 16.617 2.112 16.6965 2.25248 16.7344C2.39296 16.7723 2.54166 16.7669 2.67899 16.7189L4.51295 16.0684C5.18107 16.616 5.92541 17.0497 6.73029 17.3492L7.08453 19.2559C7.11108 19.3989 7.18064 19.5304 7.28396 19.633C7.38728 19.7356 7.51947 19.8045 7.66296 19.8304L7.7235 19.8416C8.90081 20.0528 10.1065 20.0528 11.2838 19.8416L11.3443 19.8304C11.4878 19.8045 11.62 19.7356 11.7233 19.633C11.8267 19.5304 11.8962 19.3989 11.9228 19.2559L12.2748 17.3582C13.0864 17.0542 13.8352 16.6227 14.5078 16.0729L16.3283 16.7189C16.4656 16.7673 16.6144 16.7729 16.755 16.735C16.8955 16.697 17.0212 16.6173 17.1152 16.5065L17.1556 16.4596C17.9358 15.5409 18.5344 14.5059 18.9402 13.3816L18.9604 13.3235C19.0568 13.0463 18.9739 12.7356 18.7474 12.5411ZM9.50365 13.7079C7.32666 13.7079 5.56221 11.9488 5.56221 9.77828C5.56221 7.60782 7.32666 5.84864 9.50365 5.84864C11.6806 5.84864 13.4451 7.60782 13.4451 9.77828C13.4451 11.9488 11.6806 13.7079 9.50365 13.7079Z'
										fill='white'
									/>
								</svg>
							</div>
							<div className={styles.video_actions_item}>
								<svg
									width='15'
									height='15'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0 18V11.5714H2.57143V15.4286H6.42857V18H0ZM0 6.42857V0H6.42857V2.57143H2.57143V6.42857H0ZM11.5714 18V15.4286H15.4286V11.5714H18V18H11.5714ZM15.4286 6.42857V2.57143H11.5714V0H18V6.42857H15.4286Z'
										fill='white'
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
