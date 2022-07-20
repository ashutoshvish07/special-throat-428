import React from 'react'
import style from "./Company.module.css"
import ebay from "../Icons/EBay logo.png"
import dolby from "../Icons/Dolby logo.png"
import sme from "../Icons/SME logo.png"
import newEra from "../Icons/New Era logo.png"
import pizza from "../Icons/Pizza Hut.png"
import Fjall from "../Icons/Fjall Raven.png"
import Moco from "../Icons/moco food logo.png"
import {Button} from "@chakra-ui/react"
const Company = () => {
  return (
    <div >
       <h1 className={style.trusted}>Trusted by 9,000+ businesses and millions of happy customers</h1>
       <div className={style.company}>
        <div><img src={ebay} alt="" /></div>
        <div><img src={dolby} alt="" /></div>
        <div><img src={sme} alt="" /></div>
        <div><img src={newEra} alt="" /></div>
        <div><img src={pizza} alt="" /></div>
        <div><img src={Fjall} alt="" /></div>
        <div><img src={Moco} alt="" /></div>
        <div><img src="https://www.optimizely.com/globalassets/02.-global-images/customer-logos/filippa-k-wien.png?width=200&height=130" alt="" /></div>
       </div>

        <div className={style.customerbtn}>
            <Button colorScheme='blue'>See our customers stories</Button>
        </div>
    </div>
  )
}

export default Company
