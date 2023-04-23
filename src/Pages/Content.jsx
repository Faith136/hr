import React from 'react'

function Content() {
  return (
    <div>
        <div className=" w-full h-[90vh] space-x-4 items-center justify-center grid grid-cols-2 xl:grid-cols-3">
      {/* left section */}
      <div className=" items-center justify-center flex flex-col col-span-2 h-full   py-2 px-3 w-full space-y-4">
        {/* upper section */}
        <div className=" pb-1 pt-12 px-3 w-full h-full space-y-8">
                      {/* center part */}
          <div className="pb-2 pt-4 px-3 items-center justify-center grid grid-cols-2 xl:grid-cols-4 w-full">
                       <div className=" py-3 px-3  w-full xl:col-span-3 col-span-2 xl:flex items-center justify-between  xl:space-y-0 space-y-4 xl:space-x-4">
              <div className="w-full items-start justify-start xl:items-center xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500"> No.of employees</h1>
                <h1 className="text-2xl font-bold"> 30 </h1>
              </div>
              <div className="w-full items-start justify-start xl:items-center xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500"> Employees present today </h1>
                <h1 className="text-2xl font-bold"> 10 </h1>
              </div>
              <div className="w-full items-start justify-start xl:items-center xl:justify-center flex flex-col">
                <h1 className="font-medium text-gray-500">Employees absent today</h1>
                <h1 className="text-2xl font-bold"> 20 </h1>
              </div>
            </div>
          </div>
         
        </div>
        
        
      </div>
     
    </div>
    </div>
  )
}

export default Content