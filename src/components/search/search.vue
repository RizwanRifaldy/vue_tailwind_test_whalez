
<template>

    <aside class="w-9/12 shadow ml-5 float-left bg-white">
        <div class="overflow-y-auto py-2 pt-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
            <img src="@/assets/search.png" class="w-4 mt-1 ml-3 absolute" />
            <input type="text" class="pl-11 outline-none w-9/12 float-left focus:border-b pb-1 focus:border-[#dbdbdb]"/>
            <img src="@/assets/notification.png" class="w-6 float-left -mt-2 ml-6"   />
            <img src="@/assets/profile-user.png" class="w-25 float-left -mt-2 ml-4"  />

       </div>
    </aside>

    <div class="w-9/12 ml-5 mt-5 mb-5 text-xl float-left">
        <p class="float-left">Course</p>
        <p class="float-left ml-2">           
            <img src="@/assets/home-red.png" class="w-2.1 mt-2 ml-3 float-left " />
            <p class="ml-2 float-left text-xs mt-2 text-blue-active "> > Content > Course > Manage Content </p>
        </p>
    </div>

    </template>
      
    <script>
      export default {
        name: 'Navbar'
      }
    </script>
      