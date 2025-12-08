// import styles from './styles.css'
import stylesmodule from './page.module.css'
// import styles from '../../styles/test.module.scss'
// export const config = { amp: true };

export default function Page() {
    return (
        <div className={stylesmodule.pagemodule}>
            <style jsx global>
                {stylesmodule}
            </style>
            <div className='globalpage2'>
                city
            </div>
        </div>
    )
}
export const config = {
    unstable_runtimeJS: false
};