
<template>
    <div class="w-9/12 shadow ml-5 float-left  py-5 bg-white">     
        <div class="w-full border-[#EFEFEF] border-b  float-left text-base   ">
            <p class="ml-7 mb-4"> Course Details </p>
        </div>
        <div class="mt-5 float-left">
            <div class="float-left">
                <img src="@/assets/frame.png" class="w-96 float-left ml-7"  />
            </div>
            <div class="float-left ml-6">
                <p class="text-font-color-3 text-xs">Title</p>
                <p class="text-blue-active">Introduction to Core Values AKHLAK</p>
                <br/>
                <p class="text-font-color-3 text-xs">Category</p>
                <p class="text-blue-active">Digital Content & Service</p>
                <br/>
                <p class="text-font-color-3 text-xs">Caption</p>
                <p class="text-blue-active">Core Values BUMN - AKHLAK</p>
                <br/>
                <p class="text-font-color-3 text-xs">Updated By</p>
                <p class="text-blue-active">Admin</p>
            </div>            
        </div>
        
        <div class="mt-5 float-left">
            <div class="float-left ml-7 w-96">
                <p class="text-font-color-3 text-xs">Created at</p>
                <p class="text-blue-active">08/22/2022  00:00</p>
            </div>            
            <div class="float-left ml-6">
                <p class="text-font-color-3 text-xs">Last Updated</p>
                <p class="text-blue-active">08/22/2022  00:00</p>
            </div>            
        </div>
        
        <div class="mt-5 float-left">
            <div class="float-left ml-7 w-96">
                <p class="text-font-color-3 text-xs">Status</p>
                <p class=" text-color-4 rounded-xl bg-badge pl-3 w-16 px-2 font-bold">Draft</p>
            </div>            
            <div class="float-left ml-6">
                <p class="text-font-color-3 text-xs">Privacy</p>
                <p class=" text-color-4 rounded-xl bg-badge pl-2 w-16 px-2 font-bold">Public</p>
            </div>            
        </div>
        
        <div class="w-9/12 ml-7 mt-10 float-left">          
            <p class="text-blue-active text-xs">Content</p>
        </div>
        <div class="w-full float-left">
            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                <li class="ml-7 cursor-pointer">
                    <a class="text-xs font-bold uppercase px-4 py-2 rounded block leading-normal float-left" v-on:click="toggleTabs(1)" v-bind:class="{'text-blue-active bg-white': openTab !== 1, 'text-font-color-5 bg-tab': openTab === 1}">
                        Detail
                    </a>
                </li>
                <li class="ml-3 cursor-pointer">
                    <a class="text-xs font-bold uppercase px-4 py-2 rounded block leading-normal float-left" v-on:click="toggleTabs(2)" v-bind:class="{'text-blue-active bg-white': openTab !== 2, 'text-font-color-5 bg-tab': openTab === 2}">
                        Content
                    </a>
                </li>
                <li class="ml-3 cursor-pointer">
                    <a class="text-xs font-bold uppercase px-4 py-2 rounded block leading-normal float-left" v-on:click="toggleTabs(3)" v-bind:class="{'text-blue-active bg-white': openTab !== 3, 'text-font-color-5 bg-tab': openTab === 3}">
                        Participant Course
                    </a>
                </li>
                <li class="ml-3 cursor-pointer">
                    <a class="text-xs font-bold uppercase px-4 py-2 rounded block leading-normal float-left" v-on:click="toggleTabs(4)" v-bind:class="{'text-blue-active bg-white': openTab !== 4, 'text-font-color-5 bg-tab': openTab === 4}">
                        Invite User
                    </a>
                </li>
            </ul>

            
            <div v-bind:class="{'hidden': openTab !== 1, 'block ml-7': openTab === 1}">
                <p class="text-blue-active">
                    Pengenalan Core Values BUMN AKHLAK (Amanah, Kompetensi, Harmonis, Loyal, Adaptif, Kolaboratif)
                </p>
            </div>
            
            <div v-bind:class="{'hidden': openTab !== 2, 'block ml-7': openTab === 2}">
                <p class="text-blue-active">
                    Content
                </p>
            </div>
            
            <div v-bind:class="{'hidden': openTab !== 3, 'block ml-7': openTab === 3}">
                <p class="text-blue-active">
                    Participant Course
                </p>
            </div>
            
            <div v-bind:class="{'hidden': openTab !== 4, 'block ml-7': openTab === 4}">
                <p class="text-blue-active">
                    Invite User
                </p>
            </div>
            
        </div>
        
        <div class="w-full border-[#EFEFEF] border-t  float-left text-base mt-10 mb-0  ">
            <a href="#" class="rounded-md float-right bg-color-4 text-white py-2 px-4 mt-3 mr-10">Publish Course</a>
        </div>
        
    </div>

    </template>
      
<script>
    export default {
        name: 'Detail',    
        data() {
            return {
              openTab: 1
            }
        },
        methods: {
            toggleTabs: function(tabNumber){
               this.openTab = tabNumber
            }
        }
    }
</script>
      