import React from 'react';


function Nav(props) {
   const navOptions = ['About','Blog','Home']
  return(
   < header>
    <div>
      <h1 className="heading">Traverse</h1>
      
    </div>
    <section className="nav-wrap">
            <ul className="nav-list">
                {navOptions.map(options => (
                    <li className="nav-item" key={options}>
                        <a href={'#'+ options}
                        onClick={()=> props.handlePageChange(options)}
                        className={
                            props.currentPage === options ? 'nav-link active' : 'nav-link'
                        }>{options}</a>
                    </li>
                ))}
                
            </ul>
        </section>
        </header>
  )

}

export default Nav;