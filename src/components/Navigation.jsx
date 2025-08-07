import React from 'react'

const Navigation = () => {
  return (
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a className="navbar-brand js-scroll-trigger" href="#page-top">
      <span className="d-block d-lg-none">Clarence Taylor</span>
      <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="assets/img/benyeni.jpeg" alt="..." /></span>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="navbarResponsive">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#about">Hakkımda</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Deneyimler</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Eğitimler</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Yetenekler</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">İlgi Alanlarım</a></li>
        <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Sertifikalar</a></li>
      </ul>
    </div>
  </nav>
    </div>
  )
}

export default Navigation
