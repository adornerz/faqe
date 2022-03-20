import React from 'react'
import {
    BenefitsContainer,
    Benefits,
    Benefit,
    BenefitHeading,
} from './BenefitsComponents'
import { Heading, UpperText } from '../../Texts'
import { FaAd, FaBriefcase, FaClock, FaCloud, FaGlobe, FaInfoCircle } from 'react-icons/fa'
import { Fade } from "react-reveal"

const BenefitsSection = () => {
    return (
        <BenefitsContainer id='benefits'>
            <Fade>
                <UpperText color='#2A2B3C'>
                    BENEFITET
                </UpperText>
                <Heading color='#2A2B3C'>
                    Pse duhet të keni një website?
                </Heading>
            </Fade>
            <Benefits>
                <Fade>
                    <Benefit>
                        <BenefitHeading>
                            <FaBriefcase style={{ marginRight: '10px' }} />
                            Profesionalizëm
                        </BenefitHeading>
                        <p>
                            Pajisja me një website tregon se biznesi juaj është më i gjerë se thjeshtë dyqanet fizike, gjithashtu ju jep një
                            përparësi mbi kompetitorët e tjerë duke pasur një aksesim shumë të lehtë të biznesit tënd nga kushdo.
                        </p>
                    </Benefit>
                    <Benefit>
                        <BenefitHeading>
                            <FaClock style={{ marginRight: '10px' }} />
                            Prezencë online 24/7
                        </BenefitHeading>
                        <p>
                            Duke pasur një webpage klientët tuaj mund t'ju gjejnë kudo dhe kurdo, pasi edhe jashtë orëve të punës
                            website juaj vazhdon të sigurojë klientë të rinj si dhe t'u shërbejë klientëve ekzistues.
                        </p>
                    </Benefit>
                    <Benefit>
                        <BenefitHeading>
                            <FaInfoCircle style={{ marginRight: '10px' }} />
                            Shkëmbim i shpejtë informacioni
                        </BenefitHeading>
                        <p>
                            Me anë të një website ju jepni një mënyrë të lehtë për të dhënë informacion rreth biznesit tuaj, ku mund të
                            listoni oraret, kontaktet, foto të biznesit tuaj, produktet dhe më shumë.
                        </p>
                    </Benefit>
                    <Benefit>
                        <BenefitHeading>
                            <FaCloud style={{ marginRight: '10px' }} />
                            Kredibilitet
                        </BenefitHeading>
                        <p>
                            Në botën moderne, të pasurit një prezencë online është një kusht pasi shumica e klientëve nuk do t'i besonin
                            një biznesi për të cilin s'mund të gjejnë informacion, dhe për këtë mediat sociale nuk mjaftojnë.
                        </p>
                    </Benefit>
                    <Benefit>
                        <BenefitHeading>
                            <FaGlobe style={{ marginRight: '10px' }} />
                            Zgjerim tregu
                        </BenefitHeading>
                        <p>
                            Duke qenë se një website është i aksesueshëm nga kudo në botë, aftësia për të thyer barrierat gjeografike s'ka qenë
                            kurrë më e lehtë. Çdokush, brenda ose jashtë vendit ka mundësinë të bëhet klienti juaj i ri.
                        </p>
                    </Benefit>
                    <Benefit>
                        <BenefitHeading>
                            <FaAd style={{ marginRight: '10px' }} />
                            Reklamim
                        </BenefitHeading>
                        <p>
                            Websitet janë elementi kyc për reklamimin në platformat online si Instagram, Facebook, Google etj. Klientët preferojnë
                            të shkojnë tek një website më shumë se të hapin adresën e rrjetit social. Gjithashtu ju kontrolloni dhe se cilëve do t'ju
                            shfaqet reklama duke marrë si pikësynim klientët tuaj më të zakonshëm.
                        </p>
                    </Benefit>
                </Fade>
            </Benefits>
        </BenefitsContainer>

    )
}

export default BenefitsSection