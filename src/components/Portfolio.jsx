import React from 'react'
import './Portfolio.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore'




const Portfolio = () => {
  return (
    <>
        <div className="container">
            <h2 className='titulo'>Biografia de Nelson Taffarel</h2>
            <div className='container biografia'>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Estudios</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>1995 - 2003 / Egresado de la Escuela de Arte Dramático de Agustín Alezzo</li>
                            <li>2004 - 2005 / Seminario: Agustín Alezzo</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Television</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Telefe / Los Roldan - Casados con hijos - Alma pirata - Casi angeles - El jefe - Conflictos en red - Verano del 98 - Se dice amor</li>
                            <li> CQC personajes en vivo, grabaciones de sketch</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Cine</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Telefe cortos / Condena al inocente, largo.</li>
                            <li>Roud Movi / Director Dennis Smiths, largo.</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Teatro</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>El Reñidero O. Acosta / S. De Secco T-San Martín 2002   </li>
                            <li>El Amante A. Alezzo / H. Pinter Alezzo 2003</li>
                            <li>Central Park W. A. Alezzo. / W. Allen Alezzo 2003</li>
                            <li>Muerte A. Alezzo / W. Allen Alezzo 2004</li>
                            <li>La Colección A. Arezzo / H.Pinter Alezzo 2004</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Publicidad</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <div className="row">
                            <div className="col-xl-6 col-md-8 col-lg-6">
                                <ul>
                                    <li>Danette-Napoleon / Terminal 2005</li>
                                    <li>Cuatro - coca - pichicho / Ogilvy arg 2005</li>
                                    <li>Master Card / Hermanos mundo 2009</li>
                                    <li>Fundacion garrahan - Sangre 2009</li>
                                    <li>Lemoncello-italia - arg 9-9 2008</li>
                                    <li>Rexona-inglaterra 2005</li>
                                    <li>Skate-arcor / la filmadora 2006</li>
                                </ul>
                            </div>
                            <div className="col-xl-5 col-md-8 col-lg-5">
                                <ul>
                                    <li>Gancia / Actuación Vivo 1998</li>
                                    <li>Yogurisimo / S. Pueyrredón 2003</li>
                                    <li>Fuentevita / Santiago P 2002</li>
                                    <li>AFIP / Gym caravajal prod. 2008</li>
                                    <li>Yogurisimo / Sorín 2000</li>
                                    <li>Jockey club / E. Fragnaro 1998</li>
                                    <li>Plusbelle-rutina / el ojo cine 2006</li>
                                </ul>
                            </div>
                        </div>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Videoclip</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>Los Nocheros / S. Pueyrredón 2003 - 2004</li>
                            <li>Los Enanitos Verdes / Pueyrredón 2002</li>
                            <li>La Mosca / Muchachos 2002</li>
                            <li>León Gieco / Bandidos - Pueyrredón 2002</li>
                            <li>Pimpinela / Pueyrredón 2001</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMore />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    >
                    <Typography>Radio</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        <ul>
                            <li>La Veta FM Palermo / Humor 2003</li>
                            <li>Radio Cultura / Radio Teatro 1998</li>
                            <li>Energy / Humor 1998</li>
                            <li>Rock & Pop / Juan Di Natale-tuki 1997</li>
                            <li>FM 90.3 GCHU / E. Ríos 1996</li>
                        </ul>
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    </>

  )
}

export default Portfolio