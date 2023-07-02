import { FC, useEffect, useState } from 'react'
import styles from './recommended.module.scss'
import { Button, Player, Rating, Titles } from '@/components'
import { BsFillPlayFill } from 'react-icons/bs'
import { useInView } from 'react-intersection-observer'
import { AnimatePresence, motion } from 'framer-motion'

export const Recomended: FC = () => {
	const [autoPlay, setAutoPlay] = useState(false)
	const [sound, setSound] = useState(true)
	const [fullScreen, setFullScreen] = useState(false)
	const { ref, inView } = useInView({
		threshold: 0,
		rootMargin: '-47% 0px -50% 0px',
	})

	const TIMEVIEWED = 3000

	useEffect(() => {
		if (inView) {
			setTimeout(() => {
				setAutoPlay(true)
			}, TIMEVIEWED)
		} else {
			setAutoPlay(false)
		}
	}, [inView, fullScreen])

	const soundHandler = () => {
		if (sound) {
			setSound(!sound)
		} else {
			setSound(true)
		}
	}
	const fullScreenHandler = () => {
		if (!fullScreen) {
			setFullScreen(true)
		} else {
			setFullScreen(!fullScreen)
		}
	}

	return (
		<div className={styles.recommended}>
			<div className={styles.recommended_overlay}>
				<AnimatePresence>
					<motion.div
						initial={{ opacity: 1 }}
						animate={autoPlay ? { opacity: 0 } : { opacity: 1 }}
						transition={{ duration: 0.4, delay: 0.3 }}
						className={styles.recommended_poster}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1688212243/moon/61a124e717f06f8490df057378_yyaxmdc0edywncszkzexngjyzsaxotiwidewodadmza2mwu3njrkntc_1_eeio4s.png)`,
						}}
					></motion.div>
				</AnimatePresence>
				<div className={styles.shadow}></div>
				<div className={styles.shadow_right}></div>
				<div className={styles.recommended_player} ref={ref}>
					<Player
						loop
						screenHandler={(value) => setFullScreen(value)}
						muted={sound}
						autoPlay={autoPlay}
						full={fullScreen}
						controls={false}
						src='https://res.cloudinary.com/djzubalr7/video/upload/v1688212014/moon/trailers/%D0%9F%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D1%87%D0%B8%D0%BA_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC_%D0%93%D0%B0%D1%8F_%D0%A0%D0%B8%D1%87%D0%B8___%D0%A2%D1%80%D0%B5%D0%B9%D0%BB%D0%B5%D1%80___%D0%A1%D0%BA%D0%BE%D1%80%D0%BE_adt5tp.mp4'
					/>
				</div>
			</div>
			<div className={styles.content}>
				<div className={styles.content_wrap}>
					<div
						className={styles.content_poster}
						style={{
							backgroundImage: `url(https://res.cloudinary.com/djzubalr7/image/upload/v1688215597/moon/50445515-2481203_1_jotv6w.png)`,
						}}
					></div>
					<div className={styles.content_description}>
						<div className={styles.content_name}>
							<Titles size='1xl'>Переводчик</Titles>
							<Rating rating={8.9} ratingType='moon' />
						</div>

						<div className={styles.content_subtitle}>
							<span>Оригинальное название</span>
							<Titles className={styles.content_original} size='3xl'>
								The Covenant
							</Titles>
						</div>
						<div className={styles.content_text}>
							Джон Кинли не помнит, как выжил, попав в окружение врага в
							Афганистане, но понимает, что обязан жизнью местному переводчику
							по имени Ахмед. Именно ему удалось отбить раненного Кинли и на
							себе вытащить через опасную территорию. Теперь чувство долга не
							дает Джону покоя и он решает рискнуть всем, чтобы вернуться за
							Ахмедом и его семьей. На обоих объявлена охота, действовать
							приходится в одиночку, но он понимает, что не может бросить своего
							товарища в беде.
						</div>
						<div className={styles.content_button}>
							<Button btnType='background' size='1xl' Icon={BsFillPlayFill}>
								смотреть онлайн
							</Button>
						</div>
					</div>
					<div className={styles.content_buttons}>
						<button onClick={soundHandler}>
							{sound ? (
								<svg
									width='15'
									height='12'
									viewBox='0 0 15 12'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0.00178356 5.78701C0.0248551 4.40482 0.0363911 3.7141 0.413429 3.12313C0.482036 3.01513 0.583429 2.88689 0.668429 2.79989C1.13168 2.32291 1.74368 2.32291 2.9683 2.32291C3.40544 2.32291 3.62462 2.32291 3.83348 2.25392C3.87659 2.23892 3.91969 2.22242 3.96159 2.20367C4.16559 2.11292 4.34834 1.95618 4.71323 1.64419C6.1546 0.410498 6.87467 -0.205975 7.48 0.061763C7.59596 0.113511 7.70828 0.187758 7.80846 0.279254C8.33121 0.755483 8.37129 1.86543 8.45082 4.08384C8.47619 4.72216 8.49258 5.36098 8.5 6C8.5 6.39073 8.47996 7.09495 8.45082 7.91617C8.37129 10.1346 8.33121 11.2445 7.80846 11.7207C7.70814 11.8122 7.59774 11.8855 7.4806 11.9382C6.87528 12.206 6.1546 11.5895 4.71323 10.3558C4.34834 10.0438 4.16559 9.88708 3.96159 9.79633C3.91946 9.77742 3.87672 9.76065 3.83348 9.74609C3.62462 9.67709 3.40605 9.67709 2.9683 9.67709C1.74368 9.67709 1.13168 9.67709 0.667822 9.20011C0.574948 9.10281 0.489768 8.99483 0.413429 8.87762C0.0363911 8.28515 0.0248551 7.59518 0.00178356 6.21299C-0.00059452 6.07076 -0.00059452 5.92924 0.00178356 5.78701Z'
										fill='white'
									/>
									<path
										d='M10.5 8.21045C11.6667 6.68162 14 3.65793 14 3.79383'
										stroke='white'
										strokeLinecap='round'
									/>
									<path
										d='M14 8.21045C12.7897 6.73676 10.3959 3.7894 10.5035 3.7894'
										stroke='white'
										strokeLinecap='round'
									/>
								</svg>
							) : (
								<svg
									width='15'
									height='14'
									viewBox='0 0 15 14'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M0 8.59637V5.40363C0 4.94764 0.120241 4.51033 0.334272 4.1879C0.548303 3.86546 0.838592 3.68432 1.14128 3.68432H2.79613C2.9077 3.68428 3.01682 3.63497 3.10998 3.54248L6.53381 0.141701C6.61984 0.0563557 6.71959 0.00767982 6.8225 0.000836535C6.9254 -0.00600675 7.02762 0.0292378 7.1183 0.102832C7.20898 0.176426 7.28475 0.285624 7.33757 0.418844C7.39039 0.552064 7.41829 0.704337 7.4183 0.85951V13.1405C7.41829 13.2957 7.39039 13.4479 7.33757 13.5812C7.28475 13.7144 7.20898 13.8236 7.1183 13.8972C7.02762 13.9708 6.9254 14.006 6.8225 13.9992C6.71959 13.9923 6.61984 13.9436 6.53381 13.8583L3.10998 10.4575C3.01682 10.365 2.9077 10.3157 2.79613 10.3157H1.14128C0.838592 10.3157 0.548303 10.1345 0.334272 9.8121C0.120241 9.48967 0 9.05236 0 8.59637Z'
										fill='white'
									/>
									<path
										d='M9.70508 3.13157C9.70508 3.13157 10.8764 4.42104 10.8764 6.57017C10.8764 8.7193 9.70508 10.0088 9.70508 10.0088M12.0477 0.552612C12.0477 0.552612 13.9999 2.70174 13.9999 6.57017C13.9999 10.4386 12.0477 12.5877 12.0477 12.5877'
										stroke='white'
										strokeWidth='0.6'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							)}
						</button>
						<button onClick={fullScreenHandler}>
							<svg
								width='14'
								height='14'
								viewBox='0 0 14 14'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M0.777778 9.33333C0.984057 9.33333 1.18189 9.41528 1.32775 9.56114C1.47361 9.707 1.55556 9.90483 1.55556 10.1111V12.4444H3.88889C4.09517 12.4444 4.293 12.5264 4.43886 12.6722C4.58472 12.8181 4.66667 13.0159 4.66667 13.2222C4.66667 13.4285 4.58472 13.6263 4.43886 13.7722C4.293 13.9181 4.09517 14 3.88889 14H1.55556C1.143 14 0.747335 13.8361 0.455612 13.5444C0.163888 13.2527 7.79862e-08 12.857 7.79862e-08 12.4444V10.1111C7.79862e-08 9.90483 0.0819442 9.707 0.227806 9.56114C0.373667 9.41528 0.571498 9.33333 0.777778 9.33333ZM13.2222 9.33333C13.4127 9.33336 13.5966 9.4033 13.739 9.52989C13.8813 9.65648 13.9723 9.83092 13.9946 10.0201L14 10.1111V12.4444C14.0001 12.8369 13.8519 13.2149 13.5851 13.5026C13.3182 13.7904 12.9525 13.9667 12.5611 13.9961L12.4444 14H10.1111C9.91287 13.9998 9.7222 13.9239 9.57805 13.7878C9.4339 13.6517 9.34715 13.4657 9.33553 13.2678C9.32392 13.0699 9.3883 12.875 9.51554 12.723C9.64278 12.571 9.82326 12.4733 10.0201 12.4499L10.1111 12.4444H12.4444V10.1111C12.4444 9.90483 12.5264 9.707 12.6722 9.56114C12.8181 9.41528 13.0159 9.33333 13.2222 9.33333ZM12.4444 7.79862e-08C12.8369 -0.000124117 13.2149 0.148094 13.5026 0.414942C13.7904 0.68179 13.9667 1.04755 13.9961 1.43889L14 1.55556V3.88889C13.9998 4.08713 13.9239 4.2778 13.7878 4.42195C13.6517 4.5661 13.4657 4.65285 13.2678 4.66447C13.0699 4.67609 12.875 4.6117 12.723 4.48446C12.571 4.35722 12.4733 4.17674 12.4499 3.97989L12.4444 3.88889V1.55556H10.1111C9.91287 1.55534 9.7222 1.47943 9.57805 1.34334C9.4339 1.20725 9.34715 1.02126 9.33553 0.82336C9.32392 0.625461 9.3883 0.430594 9.51554 0.278575C9.64278 0.126556 9.82326 0.0288584 10.0201 0.0054445L10.1111 7.79862e-08H12.4444ZM3.88889 7.79862e-08C4.08713 0.000219962 4.2778 0.0761283 4.42195 0.212215C4.5661 0.348303 4.65285 0.534297 4.66447 0.732196C4.67609 0.930095 4.6117 1.12496 4.48446 1.27698C4.35722 1.429 4.17674 1.5267 3.97989 1.55011L3.88889 1.55556H1.55556V3.88889C1.55534 4.08713 1.47943 4.2778 1.34334 4.42195C1.20725 4.5661 1.02126 4.65285 0.82336 4.66447C0.625461 4.67609 0.430594 4.6117 0.278575 4.48446C0.126556 4.35722 0.0288584 4.17674 0.0054445 3.97989L7.79862e-08 3.88889V1.55556C-0.000124117 1.16311 0.148094 0.785115 0.414942 0.497352C0.68179 0.209588 1.04755 0.0333227 1.43889 0.00388906L1.55556 7.79862e-08H3.88889Z'
									fill='white'
								/>
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
