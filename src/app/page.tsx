import Pop from "@/logic/Pop";
import Push from "../logic/Push";
import Shift from "@/logic/Shift";
import Concat from "@/logic/Concat";
import IndexOf from "@/logic/IndexOf";
import Includes from "@/logic/Includes";
import ForEach from "@/logic/ForEach";
import Map from "@/logic/Map";


export default function Home() {
  return (
    <>
      <div>
        Este proyecto tiene contemplado mostrar un diseño mas amigable en el futuro para que se pueda visualizar de mejor manera los metodos, sin embargo, hay otros proyectos que necesitan prioridad, en cuanto disponga del tiempo se implementaran nuevas features y nuevos metodos para que todo se vea mas amigable al usuario.
        <p>
          Por el momento, podemos decir que este proyecto esta destinado a gente con conocimientos minimos en github y entendimietos medios-alto para lo que es programacion, ya que de esa forma se podra apreciar como y porque el codigo funciona. Sin embargo, la intencion principal de este proyecto es mostrar la logica, no el front end.
        </p>
        <p>
          Una vez entendido que en futuro habra interfazas que muestre de forma grafica como es que funcionan los metodos y que debe saber algo de programacion para entender el proyecto, aca abajo le dejo el github para que pueda observar el codigo, si lo desea puede clonar mi proyecto y correrlo en su pc, los resultados se mostraran por consola. 
        </p>
        
        


      </div>
      <Map/>
      <ForEach />
      <Includes />
      <IndexOf />
      <Concat />
      <Push />
      <Pop />
      <Shift />
    </>
  );
}
