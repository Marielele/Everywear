import React from 'react'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className='container mt-4 mb-5'>
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://i.redd.it/tms31oahfkv91.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Evento</h5>
                <p>Nombre tienda</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.redd.it/t6gtgcqr2lu91.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Evento</h5>
                <p>Nombre tienda</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="https://i.redd.it/s3hmrykwidu91.png" className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Nombre tienda</h5>
                <p>...</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <hr className='mt-5 mb-1' />
        <h3>Novedades</h3>
        <hr className='mt-1 mb-4' />
        <div className="row row-cols-1 row-cols-md-6 g-3">
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://i.etsystatic.com/27659947/r/il/7e04c1/3928833663/il_500x500.3928833663_5e2l.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://cf.shopee.ph/file/6b2a947148d644824ff31070fcf508c2" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://ih1.redbubble.net/image.263613992.1688/ssrco,slim_fit_t_shirt,mens,322e3f:696a94a5d4,front,square_product,600x600.u2.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://cdn.shopify.com/s/files/1/0066/6943/4950/products/Simone-Lilith-Dark-Vintage-Aesthetic-Dress-256_2048x.jpg?v=1664099543" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://i.pinimg.com/736x/b5/a7/f9/b5a7f94c1d5b350157a30606257b4c0a.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://i.pinimg.com/originals/28/14/02/281402f2c1fa8e31b25ae8e3d1cbf9fa.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <h5 className="card-title m-0">Articulo</h5>
                <hr className='m-1' />
                <p className="card-text m-0">Descripcion</p>
                <p className="card-text"><small>Tienda</small></p>
                <Link className="stretched-link" to={`/item`}></Link>
              </div>
            </div>
          </div>
        </div>

        <hr className='mt-5 mb-1' />
        <h3>Tiendas mas populares</h3>
        <hr className='mt-1 mb-4' />
        <div className="row row-cols-1 row-cols-md-6 g-3">
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://cdn.logojoy.com/wp-content/uploads/20201113115006/45994495_padded_logo-600x600.png" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://www.designhill.com/resize_img.php?atyp=page_file&pth=ft_ca_ct||102||contestfile_3&flp=1553589445-1910500915c99e4c5b39f56-75320266.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://cdn.logojoy.com/wp-content/uploads/20201113124327/57386584_padded_logo-600x600.png" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/11/attachment_78456430-e1541654366936.jpeg?auto=format&q=60&w=1000&h=1000&fit=crop&crop=faces" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/165645252/original/f360aefb9bbfc2a24be08dd9d18463011dc0a9ab/make-aesthetic-logo-for-you.png" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card text-bg-dark border-0">
              <img src="https://i.etsystatic.com/34959088/r/il/821356/3825833827/il_fullxfull.3825833827_8ovs.jpg" className="card-img" alt="..." />
              <div className="card-img-overlay h-100 d-flex flex-column justify-content-end">
                <Link className="stretched-link" to={`/shop`}></Link>
              </div>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </div>
  )
}
