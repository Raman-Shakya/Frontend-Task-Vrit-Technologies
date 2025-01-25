import Image from 'next/image'
import style from './card.module.css'

const Card = ({ statistics, title, description, active, onClick, illustrationPos }) => {
  return (
    <div className={`bg-[--task2-red] ${style.card} ${active?style.active:''}`} onClick={onClick}>
        <div>
            <p>View all Courses</p>
        </div>
        <div className={`${style.illustrationWrapper} ${illustrationPos<0 ? style.illustrationLeft : illustrationPos>0 ? style.illustrationRight : ''}`}>
            <Image src="/assets/icons/react.svg"        width={100} height={100} alt='react' />
            <Image src="/assets/icons/interactions.svg" width={130} height={130} alt='interactions' />
            <Image src="/assets/icons/vue.svg"          width={120} height={120} alt='vue' />
            <Image src="/assets/icons/pdfFactory.svg"   width={100} height={100} alt='pdfFactory' />
        </div>
        <div className={style.wrapper}>
            <p className={style.statistics}>{statistics}</p>
            <div className={style.descriptionWrapper}>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card