import React from "react";
import {CustomElement, CustomLink} from "../SmoothScroll/SmoothScroll"
import "./WizardForm.css"
import { Table } from "react-materialize";


const WizardForm = ()=>{
    return(
        <>
            <CustomLink activeclass="active"
                to="firstInsideContainer" 
                spy={true}
                smooth={true}
                hashSpy={true}
                offset={50}
                duration={500}
                isDynamic={true}
            >
                Page 1
            </CustomLink>
            <div className="element" id="containerElement">
            <CustomElement name="firstInsideContainer" className="wizard-content">
                first element inside container
                <CustomLink activeclass="active"
                    to="secondInsideContainer" 
                    spy={true}
                    smooth={true}
                    hashSpy={true}
                    offset={50}
                    duration={500}
                    isDynamic={true}
                >
                    Page 2
                </CustomLink>
            <Table>
                <thead>
                    <tr>
                    <th data-field="id">
                        Name
                    </th>
                    <th data-field="name">
                        Item Name
                    </th>
                    <th data-field="price">
                        Item Price
                    </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>
                        Alvin
                    </td>
                    <td>
                        Eclair
                    </td>
                    <td>
                        $0.87
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Alan
                    </td>
                    <td>
                        Jellybean
                    </td>
                    <td>
                        $3.76
                    </td>
                    </tr>
                    <tr>
                    <td>
                        Jonathan
                    </td>
                    <td>
                        Lollipop
                    </td>
                    <td>
                        $7.00
                    </td>
                    </tr>
                </tbody>
                </Table>
            </CustomElement>
            

            <CustomElement name="secondInsideContainer">
                second element inside container
            </CustomElement>
            </div>


        </>
    )
}
export default WizardForm;