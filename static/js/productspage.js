function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function getProductData(product) {
    const productData = {
        'THDP': {
            images: [
                '../static/img/lookintosection/THDP/THDP_FV.png',
                '../static/img/lookintosection/THDP/THDP_LV.png',
                '../static/img/lookintosection/THDP/THDP_RV.png',
                '../static/img/lookintosection/THDP/THDP_BV.png'
            ],
            content: [
                'Precisely controlled temperature, regulated humidity, and monitored differential pressure ensure optimal cleanroom conditions and contamination prevention.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
                
            ]
        },
        'TUBE LIGHT': {
            images: [
                '../static/img/lookintosection/tube_light/tube-light-FV.png',
                '../static/img/lookintosection/tube_light/tube-light_sensor.png',
                '../static/img/lookintosection/tube_light/tube-light_RV.png',
                '../static/img/lookintosection/tube_light/tube-light_BV.png'
            ],
            content: [
                'Tube lights provide bright, even illumination for various spaces, offering energy efficiency and a sleek design suitable for both commercial and residential environments.',
               '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.2 A',
                '48 W'
            ]
        },
        'STREET LIGHT': {
            images: [
                '../static/img/lookintosection/street_light/street_light_square_FV.png',
                '../static/img/lookintosection/street_light/street_light_square_TV.png',
                '../static/img/lookintosection/street_light/street_light_square_BV.png',
                '../static/img/lookintosection/street_light/street_light_square_BACK_VIEW.png',
            ],
            content: [
                'Street lights provide reliable, wide-area illumination for roadways and public spaces, ensuring safety and visibility during nighttime and low-light conditions.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'LORA   Network with Ethernet',
                '0.2 A',
                '58 W'
            ]
        },
        'SMART PLUG': {
            images: [
                '../static/img/lookintosection/smart_plug/smart_plug_FV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_LV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_RV.png',
                '../static/img/lookintosection/smart_plug/smart_plug_BV.png',
            ],
            content: [
                'Smart plugs enable remote control and monitoring of electrical devices, allowing automation, energy tracking, and convenient management via smartphone apps or voice commands.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'SMOKE DETECTOR': {
            images: [
                '../static/img/lookintosection/smoke_detector/smoke_detector_FV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_LV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_RV.png',
                '../static/img/lookintosection/smoke_detector/smoke_detector_BV.png',
            ],
            content: [
                'Smart smoke detectors provide advanced fire detection with real-time alerts, connectivity to other smart devices, and enhanced accuracy to ensure timely responses and safety',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'OFFICE LIGHT': {
            images: [
                '../static/img/lookintosection/smart_light/cleanroom_tilted_view.png',
                '../static/img/lookintosection/smart_light/cleanroom_LV.png',
                '../static/img/lookintosection/smart_light/cleanroom_RV.png',
                '../static/img/lookintosection/smart_light/cleanroom_BV.png',
            ],
            content: [
                'Office lights offer customizable brightness, automated scheduling, and energy efficiency, enhancing productivity and reducing costs with intelligent lighting control',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'FLOOD LIGHT': {
            images: [
                '../static/img/lookintosection/flood_light/flood_FV.png',
                '../static/img/lookintosection/flood_light/flood_LS.png',
                '../static/img/lookintosection/flood_light/flood_RS.png',
                '../static/img/lookintosection/flood_light/flood_BV.png',
            ],
            content: [
                'Flood lights deliver intense, broad-spectrum illumination for expansive areas, enhancing visibility and security in outdoor and large-scale indoor settings.',
               '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'MULTI CONTROL PANEL': {
            images: [
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_FV.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_RV.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_BV_2.png',
                '../static/img/lookintosection/multi_machine_controller/Multi_machine_controller_BV.png',
            ],
            content: [
                'Multi-machine controllers enable centralized management and coordination of multiple machines or systems, optimizing performance and efficiency in complex operations.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'HI-BAY LIGHT': {
            images: [
                '../static/img/lookintosection/hi-bay_light/high-bay-light_view.png',
                '../static/img/lookintosection/hi-bay_light/hi-bay_light_front_view.png',
                '../static/img/lookintosection/hi-bay_light/high-bay-top_view.png',
                '../static/img/lookintosection/hi-bay_light/hi-bay_light_back_view.png',
            ],
            content: [
                'High-bay lights deliver intense, wide-ranging illumination for large spaces, offering consistent brightness and energy efficiency in industrial and commercial settings.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'DUST SENSOR': {
            images: [
                '../static/img/lookintosection/dust_particle_monitor/DP_T.png',
                '../static/img/lookintosection/dust_particle_monitor/DP_B.png',
                '../static/img/lookintosection/dust_particle_monitor/DP_I.png',
                '../static/img/lookintosection/dust_particle_monitor/DP_R.png',
            ],
            content: [
                'Dust particle monitors detect and measure airborne particulate levels, ensuring air quality and cleanliness in sensitive environments.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },
        'AIR FLOW': {
            images: [
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_FV.png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_LV.png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_RV.png',
                '../static/img/lookintosection/air_flow_monitor/air_flow_monitor_BV.png',
            ],
            content: [
                'Airflow monitors track and measure air movement and velocity, ensuring proper ventilation and maintaining optimal air quality in various environments.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'SMART METER': {
            images: [
                '../static/img/lookintosection/smart-meter/smart_meter_FV.png',
                '../static/img/lookintosection/smart-meter/smart_meter_SV.png',
                '../static/img/lookintosection/smart-meter/smart_meter_TV.png',
                '../static/img/lookintosection/smart-meter/smart_meter_BV.png',
            ],
            content: [
                'Airflow monitors track and measure air movement and velocity, ensuring proper ventilation and maintaining optimal air quality in various environments.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'AIR WATER SHOWER': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/air water showers/1.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/2.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/3.png',
                '../static/img/lookintosection/cleanroom_automation/air water showers/1.png',
            ],
            content: [
                'Efficient decontamination units using air and water jets to remove particles before cleanroom entry, ensuring hygiene and safety',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'AIR CONDITIONING SYSTEM': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/air_conditioning_systems.jpg',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/1.jpg',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/2.jpg',
                '../static/img/lookintosection/cleanroom_automation/air condition systems/3.jpg',
            ],
            content: [
                'Designed to maintain precise temperature, humidity, and air quality, our air conditioning systems ensure a stable and contaminant-free environment for cleanroom operations, enhancing efficiency and safety',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'FUME CUPBOARD': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Fume_Cupboard.jpg',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/2.jpg',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/3.png',
                '../static/img/lookintosection/cleanroom_automation/fume cupboard/product.full.jpg',
            ],
            content: [
                'Engineered for safety, our fume cupboards effectively remove hazardous fumes and vapors, providing a secure and controlled environment for cleanroom procedures.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'LAMINAR WORK STATION': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Laminar_work_station.jpg',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/4.png',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/2.png',
                '../static/img/lookintosection/cleanroom_automation/laminar work station/1.png',
            ],
            content: [
                'Designed for particle-free environments, our laminar workstations provide unidirectional airflow, ensuring a sterile workspace for critical cleanroom tasks.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'MODULAR SANDWITCH PANEL': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/modular_sandwitch_panels.jpg',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/1.jpg',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/3.jpg',
                '../static/img/lookintosection/cleanroom_automation/sandwitch panels/1.jpg',
            ],
            content: [
                'Durable, insulated panels offering superior thermal control and seamless integration, ideal for creating efficient and sterile cleanroom environments.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        'NITROGEN STORAGE CABINET': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/nitrogen_storage_cabinate.jpg',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/1.png',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/2.png',
                '../static/img/lookintosection/cleanroom_automation/nitrogen storage cabinet/3.png',
            ],
            content: [
                'Provides an inert, controlled environment to safely store sensitive materials, preventing oxidation and contamination in cleanroom settings.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },

        
        'PASS BOX': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/Pass_box.jpg',
                '../static/img/lookintosection/cleanroom_automation/pass box/1.png',
                '../static/img/lookintosection/cleanroom_automation/pass box/2.png',
                '../static/img/lookintosection/cleanroom_automation/pass box/3.png',
            ],
            content: [
                'Facilitates safe and contamination-free transfer of materials between cleanroom areas, ensuring minimal disruption to the controlled environment.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },


        
        'SAMPLING BOOTH': {
            images: [
                '../static/img/lookintosection/cleanroom_automation/sampling-booth.jpg',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/1.png',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/2.png',
                '../static/img/lookintosection/cleanroom_automation/sampling booth/3.png',
            ],
            content: [
                'Ensures a controlled, contamination-free environment for safe and accurate material sampling in cleanroom operations.',
                '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        },


     

        'CONTROL PANEL': {
            images: [
                '../static/img/lookintosection/control_panal/control_panal_FV.png',
                '../static/img/lookintosection/control_panal/control_panal_LV.png',
                '../static/img/lookintosection/control_panal/control_panal_RV.png',
                '../static/img/lookintosection/control_panal/control_panal_BV.png',
            ],
            content: [
                'Control panels provide centralized management and monitoring of various systems, offering intuitive interfaces for operating, configuring, and controlling equipment and processes.',
              '180 Vac to 265 Vac , 50/60 Hz',
                'Ethernet',
                '0.22A / 0.33A / 0.44A',
                '40W / 60W / 80W'
            ]
        }
    };
    return productData[product] || {};
}

window.onload = function () {
    const product = getQueryParam('product');

    if (product) {
        document.getElementById('product_img_title').innerText = product.replace(' ', ' ');

        const data = getProductData(product);
        const images = data.images || [];
        const content = data.content || [];

        const mainImageContainer = document.getElementById('product_main_img_big');
        const productImagesContainer = document.getElementById('products_images_small');

        if (images.length > 0) {
            // Set the main image dynamically
            mainImageContainer.src = images[0];

            images.slice(1).forEach(src => {
                const product_changing_functionalities = document.createElement('div');
                product_changing_functionalities.className = 'small-box';

                const imgElement = document.createElement('img');
                imgElement.src = src;

                // Add click event to swap images
                imgElement.addEventListener('click', function () {
                    const tempSrc = mainImageContainer.src;
                    mainImageContainer.src = this.src;
                    this.src = tempSrc;
                });

                product_changing_functionalities.appendChild(imgElement);
                productImagesContainer.appendChild(product_changing_functionalities);
            });
        }

        // Add the content divs based on the product
        const contentDivIds = ['product_img_description', 'product_img_input_voltage_spec', 'product_img_network', 'product_img_input_current', 'product_img_power_wattage', 'product_img_power_wattage1', 'product_img_power_wattage2', 'product_img_power_wattage3', 'product_img_power_wattage4'];
        contentDivIds.forEach((id, index) => {
            const div = document.getElementById(id);
            if (div && content[index]) {
                div.innerText = content[index];
            }
        });
    } else {
        console.error('No product parameter found in the URL.');
    }
}