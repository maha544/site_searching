var a = {
    mobiles: {
        Samsung: {
            SamsungA10: {
                name: "Samsung A10",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "22,000 PKR"
            },
            SamsungA20: {
                name: "Samsung A20",
                ram: "4gb",
                rom: "64gb",
                camera: "18",
                price: "28,000"
            },
            SamsungA30: {
                name: "Samsung A30",
                ram: "4gb",
                rom: "64gb",
                camera: "25",
                price: "29,000"
            }
        },
        IPhone: {
            IPhone11: {
                name: "IPhone11",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "100,000"
            },
            IPhone12: {
                name: "IPhone12",
                ram: "4gb",
                rom: "64gb",
                camera: "12",
                price: "150,000"
            },
            IPhone13: {
                name: "IPhone13",
                ram: "6gb",
                rom: "128gb",
                camera: "24",
                price: "200,000"
            }
        },
        Oppo: {
            OppoV20: {
                name: "OppoV20",
                ram: "8gb",
                rom: "128gb",
                camera: "64",
                price: "54,999"
            },
            OppoF19: {
                name: "OppoF19",
                ram: "6gb",
                rom: "128gb",
                camera: "48",
                price: "36,999"
            },
            OppoF11: {
                name: "OppoF11",
                ram: "4gb",
                rom: "64gb",
                camera: "48",
                price: "35,999"
            }
        },
        Vivo: {
            VivoY20: {
                name: "VivoY20",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "26,999"
            },
            VivoY21: {
                name: "VivoY21",
                ram: "4gb",
                rom: "64gb",
                camera: "13",
                price: "43,999"
            },
            VivoY55: {
                name: "VivoY55",
                ram: "8gb",
                rom: "128gb",
                camera: "50",
                price: "64,999"
            }
        }
    }
}

let brands = document.getElementById("brands");
let models = document.getElementById("models");

let keysOfBrd = Object.keys(a.mobiles);
for (let i =0 ; i < keysOfBrd.length ; i ++){
    brands.innerHTML += `<option>${keysOfBrd[i]}</option>`
}

function selectBrd(){
    let selectedBrand = brands.value;
    let selectedModel = models.value;
    let keysOfMdl = Object.keys(a.mobiles[selectedBrand]);
    models.innerHTML = "";
    for(let i = 0; i < keysOfMdl.length; i++){
        models.innerHTML += `<option value="${keysOfMdl[i]}">${keysOfMdl[i]}</option>`;
    }
}

function selectModl(){
    let selectedBrand = brands.value;
    let selectedModel = models.value;
    let modelDetailsContainer = document.getElementById("modelDetails");
    a.mobiles.hasOwnProperty(selectedBrand) && a.mobiles[selectedBrand].hasOwnProperty(selectedModel) ?
    (() => {
        let modelDetails = a.mobiles[selectedBrand][selectedModel];
        let detailsHTML = `
            <p><strong>Name:</strong> ${modelDetails.name}</p>
            <p><strong>RAM:</strong> ${modelDetails.ram}</p>
            <p><strong>ROM:</strong> ${modelDetails.rom}</p>
            <p><strong>Camera:</strong> ${modelDetails.camera}</p>
            <p><strong>Price:</strong> ${modelDetails.price}</p>
        `;
        modelDetailsContainer.innerHTML = detailsHTML;
    })() :
    modelDetailsContainer.innerHTML = "<p>This model does not exist</p>";

}
