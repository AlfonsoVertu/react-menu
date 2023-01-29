import React , { useContext } from 'react';
import { GlobalAppContext } from './../../context';
import App from './../../App';

import reactLogo from '../../images/logo.svg'

function IndexContent() {

const { toggled , setToggled , hasBackground, setHasBackground } = useContext(
    GlobalAppContext
);

    return (
        
        <div class="container-fluid">
            <div class="row">
                <div class="form-group col-md-12">
                  <p>
                    <a href="#/" class="btn btn-outline-secondary mr-1" onClick={() =>setToggled(!toggled)}>Toggle Sidebar</a>
                    <a href="#/" class="btn btn-secondary" onClick={() =>setHasBackground(!hasBackground)} >BackImage</a>
                  </p>
                    <h2> <img src={reactLogo} alt="React logo" width="100px" /> Virtual World Gate</h2>
                    <hr />
                </div>
            </div>
            <div class="attribution text-center badge badge-warning">
                
            </div>
        </div>
    )
}

export default IndexContent;