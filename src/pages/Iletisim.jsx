export default function Iletisim(props) {
  return (
    <>
      <div className="container fw-bold text-light bg-black text-center p-5">
        Bize Ulaşın
      </div>
      <div className="container border mt-2 border-3 border-black ">
        <div className="row">
          <div className="col-md-4 p-5 border border-black d-flex flex-column justify-content-center align-items-center">
            <h1>Sorularınız</h1>
            <p>Ürün ve hizmetlerimizle ilgili sorularınız için ayrıca bu formu doldurarak da bize ulaşabilirsiniz.</p>
          </div>
          <div className="col-md-8 p-5 border border-black">
            <h1 className="text-center">Bilgilerinizi Girin</h1>
            <form onSubmit={e => e.preventDefault()}>
              <div className="mb-3">
                <label htmlFor="exName" className="form-label">Adı</label>
                <input type="text" className="form-control" id="exName"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exSurname" className="form-label">Soyadı</label>
                <input type="text" className="form-control" id="exSurname"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exMail" className="form-label">E-posta</label>
                <input type="email" className="form-control" id="exMail"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exTopic" className="form-label">Konu</label>
                <input type="text" className="form-control" id="exTopic"/>
              </div>
              <div className="mb-3">
                <label htmlFor="exMsg" className="form-label">Bize bir mesaj bırakın...</label>
                <textarea className="form-control" id="exMsg" rows={4} cols={40} style={{resize : "none"}}/>
              </div>
              <button type="submit" className="btn w-100 btn-outline-dark">Gönder</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}