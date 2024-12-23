import Pop from "@/logic/Pop";
import Push from "../logic/Push";
import Shift from "@/logic/Shift";
import Concat from "@/logic/Concat";
import IndexOf from "@/logic/IndexOf";
import Includes from "@/logic/Includes";
import ForEach from "@/logic/ForEach";
import Map from "@/logic/Map";
import styles from "../styles/page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Bienvenido al Proyecto</h1>
        <p className={styles.text}>
          Este proyecto tiene contemplado mostrar un diseño mas amigable en el futuro para que se puedan visualizar de mejor manera los metodos y otras caracteristicas.
        </p>
        <p className={styles.text}>
          Por el momento, podemos decir que este proyecto esta destinado a gente con conocimientos minimos en github y entendimietos medios-alto para lo que es programacion, ya que de esa forma se podra apreciar como y porque el codigo funciona. Sin embargo, la intencion principal de este proyecto es mostrar la logica, no el front end, al menos por ahora.
        </p>
        <p className={styles.text}>
          Una vez entendido que en el futuro habra interfazas que muestre de forma grafica como es que funcionan los metodos y que debe saber algo de programacion para entender el proyecto, aca abajo le dejo el github para que pueda observar el codigo, si lo desea puede clonar mi proyecto y correrlo en su pc, los resultados se mostraran por consola.
        </p>
        <p className={styles.text}>
          Pero tambien puede mirarlo directamente al hacer click en las cartas, de esa forma puede observar de forma rapida la logica y de forma mas interactiva.
        </p>

        <h3 className={styles.warning}>Esto es un early acces: <Link href={"https://github.com/San-dei/metodos"} className={styles.warning}>Repositorio</Link></h3>
      </div>

      <div className={styles.methodContainer}>
        <div className={styles.methodCard}><Map /></div>
        <div className={styles.methodCard}><ForEach /></div>
        <div className={styles.methodCard}><Includes /></div>
        <div className={styles.methodCard}><IndexOf /></div>
        <div className={styles.methodCard}><Concat /></div>
        <div className={styles.methodCard}><Push /></div>
        <div className={styles.methodCard}><Pop /></div>
        <div className={styles.methodCard}><Shift /></div>
      </div>
    </>
  );
}
