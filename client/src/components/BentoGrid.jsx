export const BentoGrid = () => {
  return <>
  <div className="container">
        <h1 className="text-3xl sm:font-semibold mb-10">Your Success is our fuel.</h1>
        <div className="flex flex-col gap-6 lg:grid lg:grid-cols-3 [grid-auto-rows:96px]">
            <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold">Digital Branding & Campaigns</h3>
                    <img src="/images/marketing.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
            <div className="row-start-1 row-end-4 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold">Custom CRM Development</h3>
                    <p className="text-lg text-center font-light"> We build tailored CRM solutions that automate workflows, and enhance customer relationships for maximum efficiency.</p>
                    <img src="/images/customer-relationship.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
            <div className="row-start-1 row-end-3 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold">Custom Web & App Development</h3>
                    <img src="/images/app-development.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
            <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold">Enterprise Software Solutions</h3>
                    <p className="text-lg text-center font-light"> Our team develops scalable enterprise software that integrates with your business processes.</p>
                    <img src="/images/business-solutions.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
            <div className="row-start-4 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold">IT Consultation</h3>
                    <img src="/images/consultation.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
            <div className="row-start-3 row-end-6 group rounded-2xl p-[1px] bg-slate-200 hover:bg-gradient-to-br hover:from-red-200 hover:via-purple-200 hover:to-yellow-200">
                <div className="bg-white rounded-2xl w-full h-full p-6 gap-6 flex flex-col items-center group-hover:bg-gradient-to-br group-hover:from-red-50 group-hover:via-purple-50 group-hover:to-yellow-50">
                    <h3 className="text-2xl font-bold"> Cloud Services and Hosting</h3>
                    <p className="text-lg text-center font-light"> We provide cloud solutions, such as hosting, and expert server management. </p>
                    <img src="/images/cloud-services.png" alt="Dosink" className="w-full max-w-xs h-auto object-contain" />
                </div>
            </div>
        </div>
    </div>
  </>
}
