export function HeroHeader(datas = {title: "Our services", text: "What We Do"}) {
    return <section className="page-title bg-1">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="block text-center">
                        <span className="text-white">{datas.title}</span>
                        <h1 className="text-capitalize mb-5 text-lg">{datas.text}</h1>
                    </div>
                </div>
            </div>
        </div>
    </section>
}