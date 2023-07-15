import Link from 'next/link'

import style from './header.module.css'

export default function Header() {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <h1 className={style.name}>Skybal</h1>
        <div className={style.container_user}>
          <div className={style.user}>
            <div className={style.name_user}>Youssef</div>
            <div className={style.role_user}>Manger</div>
          </div>
          <Link href="/">
            <img className={style.image} src="https://t4.ftcdn.net/jpg/04/50/97/71/360_F_450977120_iNKwznk27ghqhL58rvuh3w1xj1mPVHdy.jpg" alt="company skybal software" />
          </Link>
        </div>
      </div>
    </header>
  )
}
