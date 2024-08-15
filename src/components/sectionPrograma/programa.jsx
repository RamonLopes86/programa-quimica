import estiloProg from "./programa.module.css";
import Image from "next/image";
import atomo from "../../../public/atomo2.png"
import plano from "../../../public/colorido5.jpg"
import Resultado from "../Resultado/resultado";





export default function Programa(props) {

    


    return (

        <section className={`${estiloProg.boxMaior} ${props.prog}`} onClick={props.clickOut}>

            

            <Resultado
            
            resModal={props.modal}
            fechar={props.fechar}
            resultado={props.resultado}
            modRef={props.modRef}
            
            
            
            />


           <div className={estiloProg.boxImage}>


            <Image

            className={estiloProg.imgPlano}
            src={plano}

            />


           </div>



            <div className={estiloProg.formulario}>

                <Image

                   src={atomo}
                   className={estiloProg.imgAtomo}
                />

                <h1 className={estiloProg.titulo}>CALCULO DE PREPARO DE SOLUÇÃO</h1>

                <form action="">
                    
                    <div className={estiloProg.boxInput}>

                        <label htmlFor="idmae">Concentração da solução mãe :</label>

                        <input className={props.corInput} onChange={props.changeSolMAe} value={props.c} type="number" name="solMae" id="idmae" autoComplete="off" placeholder="valor da concentração"  />
                    
                    </div>

                    <div className={estiloProg.boxInput}>
                        <label htmlFor="idv">Valor da V1</label>
                        <input className={props.corV1} onChange={props.changePri} value={props.pv} type="number" name="v" id="idv" placeholder="volume da solução a preparar (mL)"   />
                    </div>

                    <div className={estiloProg.boxInput}>

                        <label htmlFor="idc">Valor da C1</label>
                        <input className={props.corC1} onChange={props.changeSeg} value={props.sv} type="number" name="c" id="idc" placeholder="concentração da solução a preparar" />
                        
                    </div>


                </form>

                <div className={estiloProg.boxMsg}>
                    
                    <span className={estiloProg.msg}>{props.campo}</span>

                    <div className={`${estiloProg.circulo} ${props.circulo}`}></div>

                </div>



                <div className={estiloProg.boxBotao}>
                    
                    <button className={estiloProg.botaoCalc} onClick={() => props.calc(props.c, props.pv, props.sv)}>calcular</button>

                    <button onClick={props.limp} className={estiloProg.botaoLimpar}>LIMPAR</button>
                
                
                </div>

                

            </div>


        </section>
    )
}