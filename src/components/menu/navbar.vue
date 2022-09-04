
<template>

<aside class="w-64 shadow ml-5 float-left bg-white" aria-label="Sidebar">
    <div class="overflow-y-auto py-4 px-3 rounded dark:bg-gray-800">
    <img src="@/assets/logo.png" class="mb-5  " />
       <ul class="space-y-2 mb-4">
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                    <img src="@/assets/dashboard.png" class="w-5" />
                    <span class="ml-3 w-40 font-normal text-font-color-2 float-left">Dashboard</span>
                    <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
        </ul>
        <span class="text-xs font-medium text-font-color-1">CLONE MANAGEMENT</span >
        <ul class="space-y-2">
            <li>
                <button v-on:click="isOpen = !isOpen" type="button" class="  hover:bg-hover-color rounded-lg flex items-center p-2 text-base w-full ">
                    <img src="@/assets/content.png" class="w-5" />
                    <span class="flex-1 ml-3 text-left font-normal text-font-color-2">Content</span>
                    <img src="@/assets/arrow.png" class="w-5" />
                </button>
                <ul id="dropdown-example" class=" transform transition-all" :class="isOpen ? 'd-block ' : 'hidden'">
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Assigment
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Webinar
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Video
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Podcast
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Files
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Certificate
                            </span>
                        </a>
                    </li>
                    <li class="group drop-shadow-md">
                        <a href="#" class=" flex bg-color-4 items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-2 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-white group-hover:text-white">
                                Course
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Pathways
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Voucher
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Quiz
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Category
                            </span>
                        </a>
                    </li>
                    <li class="group">
                        <a href="#" class="flex items-center p-2 pl-11 w-full text-base font-normal rounded-lg group-hover:bg-color-4  ">            
                            <div class="bg-circle-1 w-3.5 h-3.5 group-hover:bg-circle-2"></div>
                            <span class="ml-3 font-normal text-font-color-2 group-hover:text-white">
                                Competencies
                            </span>
                        </a>
                    </li>
                </ul>
            </li>
            
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                <img src="@/assets/user.png" class="w-5" />
                <span class="ml-3 w-40 font-normal text-font-color-2">Account</span>
                <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                <img src="@/assets/setting.png" class="w-5" />
                <span class="ml-3 w-40 font-normal text-font-color-2">Setting</span>
                <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                <img src="@/assets/analytic.png" class="w-5" />
                <span class="ml-3 w-40 font-normal text-font-color-2">Analytic</span>
                <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                <img src="@/assets/branding.png" class="w-5" />
                <span class="ml-3 w-40 font-normal text-font-color-2">Branding</span>
                <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
            
            <li>
                <a href="#" class="flex items-center p-2 text-base rounded-lg hover:bg-hover-color">
                <img src="@/assets/integrasi.png" class="w-5" />
                <span class="ml-3 w-40 font-normal text-font-color-2">Integrasi</span>
                <img src="@/assets/arrow.png" class="w-5 ml-3" />
                </a>
            </li>
            
        </ul>
   </div>
</aside>
    
</template>
  
<script>
  export default {
    name: 'Navbar',    
    data: () => {
        return {
            isOpen: true
        }
    },
  }
</script>
  