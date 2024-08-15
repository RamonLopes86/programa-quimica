import estiloResult from "./resultado.module.css";







export default function Resultado(props){

   

    if(props.resModal){

        return(


            <section className={estiloResult.boxMaior} ref={props.modRef}>

              
                
                <button onClick={props.fechar} className={estiloResult.botaoX}></button>

                

                <div className={estiloResult.resultado}>
                    <p>Volume da solução mãe</p>
                    <p className={estiloResult.valorRes}>{props.resultado}</p>
                </div>
                    
            </section>
    
                    
        )
                        
                        
            
        }
            
    }
    



   
