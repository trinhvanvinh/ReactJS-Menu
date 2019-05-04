import React, {Component} from 'react';
import logo_menu from '../res/logo.png' ;
import search_icon from '../res/search-icon.png';

class Header extends Component{

    constructor(){
        super();
        this.state={
            showForm: false
        }
    }

    showForm(){
        this.setState({
            showForm:!this.state.showForm
        })
    }

    render(){

        let searchForm=this.state.showForm ? (
            <form className="menu__search-form hide" method="POST" > 
            <input className="menu__search-input" placeholder="Type and hot enter" />
          </form>
        ):'';

     let linkMarkup=   this.props.links.map((link, index)=>{
         let linkMarkup=link.active?(
            <a className="menu__link menu__link--active" href={link.link} >{link.label}</a>
         ):(
            <a className="menu__link" href={link.link} >{link.label}</a>
         );
            return(
                <li key={index} className="menu__list-item" >
                    {linkMarkup}
                </li>
               
            )
        });

        console.log(this.props.links);

        return(
            <nav className="menu" >

            <h1 style={{
              backgroundImage: 'url('+logo_menu+')'
            } } className="menu__logo" > </h1>
    
            <div className="menu__right" >
    
              <ul className="menu__list" >
                {linkMarkup}
              </ul>
    
              <button onClick={this.showForm.bind(this)} className="menu__search-button" style={{backgroundImage:'url('+search_icon+')'}} ></button>
    
             {searchForm}
    
            </div>
          </nav>
        )
    }
}

export default Header;
