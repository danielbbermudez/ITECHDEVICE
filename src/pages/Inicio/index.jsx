import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import mainitech from '../../assets/images/main_itechdevicestore.png';
import oferta1 from '../../assets/images/ofertaapple.png';
import oferta2 from '../../assets/images/ofertasamsung.png';
import oferta3 from '../../assets/images/ofertaandroid.png';
import './Inicio.css'




function Inicio() {

  document.title = 'ITECHDEVICE  - Inicio';


  if (oferta3 === undefined) {
    return <section id="menu" className="py-5 text-center container">
      <div className="album bg-degrade py-5">
        <div className="container">
          <div className="">
          </div></div></div>
    </section>
  }
  return (
    <div>
      <section className=" pt-48 pb-40 bg-dark bg-cover bg-size--cover slide-in-fwd-center">
        {/* Overlay */}
        <span className=" top-0 start-0 w-full h-full bg-dark opacity-80" />
        {/* Contenido */}
        <div className="container-lg max-w-screen-xl position-relative overlap-10 text-center text-lg-start pt-5 pb-5 pt-lg-6">
          <div className="row row-grid">
            <div className="col-md-2"></div>
            <div className="col-md-8 text-md-center">
              {/* Título */}
              <h1 className="ls-tight font-bolder display-6 text-white mb-4">
              Bienvenidos a ITECHDEVICE,
              </h1>
              <h2 className="ls-tight font-bolder display-6 text-white mb-4">
              tu último smartphone a un solo click.
              </h2>
              {/* Texto */}
              <p className="lead text-white text-opacity-80 mb-10 w-lg-2/3">
                Tenemos los mejores dispositivos de las marcas más destacadas a un precio imbatible además de dos año de garantía en todos nuestros productos.
                {/* Botones */}
              </p><div className="mt-10 mx-n2">
                <Link to="/" className="btn btn-lg btn-primary shadow-sm mx-2 px-lg-8">
                  ¡Pedir Online!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <article>
          <div className="px-4 py-2 my-5 text-center d-lg-none d-xl-none">
            <img className="d-block mx-auto img-fluid" src={mainitech} alt="ITECHDEVICE" />
            <h1 className="display-5 fw-bold">¡¡Encuentra tu mejor oferta!!</h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4"> Somos una empresa con experiencia en el sector ayudando a nuestros clientes a encontrar el smartphone perfecto que se ajuste a sus necesidades y presupuesto.</p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Menú</button></Link>

              </div>
            </div>
          </div>
          {/* Para Desktops */}
          <div className="container col-xxl-8 px-4 py-2 d-none d-lg-block bg-light mt-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6">
                <img src={mainitech} className="d-block mx-lg-auto img-fluid" alt="Pedir Online" width={700} height={500} loading="lazy" />
              </div>
              <div className="col-lg-6">
                <h1 className="display-6 fw-bold lh-1 mb-3">¡Encuentra tu mejor oferta!</h1>
                <p className="lead mb-4">¡ Somos una gran empresa con experiencia en el sector ayudando a nuestros clientes a encontrar el smartphone perfecto que se ajuste a sus necesidades y presupuesto.</p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <Link to="/"><button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Menú</button></Link>

                </div>
              </div>
            </div>
          </div>
        </article>
        <div className="pricing-header p-3 py-2 pb-md-4 mx-auto text-center">
          <h1 className="display-4 fw-normal">¡Ofertas!</h1>
          <p className="fs-5">Ofrecemos una amplia gama de últimos lanzamientos de las marcas mas relevantes en el mercado de smartphones. </p>
        </div>
        <div className="marcas text-center container col-xxl-8 px-4 py-2 d-lg-block">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 text-white bg-dark">
                  <h4 className="my-0 fw-normal">APPLE</h4>
                </div>
                <div className="card-itechdevice rounded-bottom mt-2" >
                  <img src={oferta1} height="380" width="150" alt="seccionsmartphone" className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-black">Desde $960.000</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>iPhone</li>
                    <li>Mac</li>
                    <li>iPad</li>
                    <li>Apple Watch</li>
                  </ul>
                  <Link to="/category/apple"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 text-white bg-dark">
                  <h4 className="my-0 fw-normal">SAMSUNG</h4>
                </div>
                <div className="card-itechdevice rounded-bottom mt-2">
                  <img src={oferta2} height="280" width="150" alt="seccionsmartphone" className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-black">Desde $400.000</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Serie Galaxy</li>
                    <li>Samsung Gear</li>
                    <li>Galaxy Tab</li>
                    <li>Samsung Book</li>
                  </ul>
                  <Link to="/category/samsung"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card mb-4 rounded-3 shadow-sm">
                <div className="card-header py-3 text-white bg-dark">
                  <h4 className="my-0 fw-normal">ANDROID</h4>
                </div>
                <div className="card-itechdevice rounded-bottom mt-2">
                  <img src={oferta3} height="280" width="127" alt="seccionsmartphone" className="img-fluid" />
                  <h1 className="card-title pricing-card-title mt-3 text-black">Desde $10.000</h1>
                  <ul className="list-unstyled mt-3 mb-4">
                    <li>Xiaomi</li>
                    <li>Huawei</li>
                    <li>Motorola</li>
                    <li>Oppo</li>
                  </ul>
                  <Link to="/category/android"><button type="button" className="w-100 btn btn-lg btn-primary">¡Pedir Online!</button></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Inicio; 