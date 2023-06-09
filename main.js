
class Factory{
    constructor(id, name, numberOFemployees, kindOFactivities ){
        this.id=id;
        this.name=name;
        this.numberOFemployees=numberOFemployees;
        this.kindOFactivities=kindOFactivities;
    }

//Запис даних підприємства
    setFactoryData( name, numberOFemployees, kindOFactivities ){
        this.name=name;
        this.numberOFemployees=numberOFemployees;
        this.kindOFactivities=kindOFactivities;
    }
//Вивід даних у консоль
    getFactoryData(){
        return   this.id +". "+this.name+"|"+this.numberOFemployees+"|"+this.kindOFactivities;
    }
//Вивід даних у вигляді таблиці
getFactoryDataAsRow() {
    return `
      <tr>
        <td>${this.id}</td>
        <td>${this.name}</td>
        <td>${this.numberOFemployees}</td>
        <td>${this.kindOFactivities}</td>
        <td>
          <button class="edit-Factory" data-id="${this.id}">EDIT</button>
          <button class="delete-Factory" data-id="${this.id}">DELETE</button>
        </td>
      </tr>
    `;
  }
  
}
class FactoryList{
    constructor(){
        this.list=[];
        this.count=0;
    }
    addFactory(name, numberOFemployees, kindOFactivities){
        this.count++;
        let newFactory = new Factory(this.count, name, numberOFemployees, kindOFactivities);
        this.list.push(newFactory);
        return this.count;
       
    }
    editFactory(id,name, numberOFemployees, kindOFactivities){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list[i].setFactoryData(name, numberOFemployees, kindOFactivities);
                break;
            }
        }
        return true;

    }
    deleteFactory(id){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list.splice(i,1);
            }
        }
        return true;
    }
    getFactoryById(number){
        for(let i=0; i < this.list.length; i++){
            if(number==this.list[i].id){
               return this.list[i];
            }
        }
    }
    displayFactoryListToConsole(){
        for(let i=0; i < this.list.length; i++){
            console.log(this.list[i].getFactoryData());
        }
      
    }
    displayFactoryListToPage(){
		let rowContent=``;
		for(let i=0;i<this.list.length;i++){
			rowContent+=this.list[i].getFactoryDataAsRow();
		}
		return `<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Name</th>
							<th>Number of employees</th>
							<th>Orbit Kind of activities</th>
							
						</tr>
					</thead>
					<tbody>
					`+rowContent+`
					</tbody
				</table>`;
	}
    
    
}
class Production{
    constructor(id, fullname, unitOfmasurement, expirationDate, purchasePrice){
        this.id=id;
        this.fullname=fullname;
        this.unitOfmasurement=unitOfmasurement;
        this.expirationDate=expirationDate;
        this.purchasePrice=purchasePrice;
    }

//Запис даних продукції
    setProductionData(fullname, unitOfmasurement, expirationDate, purchasePrice ){
        this.fullname=fullname;
        this.unitOfmasurement=unitOfmasurement;
        this.expirationDate=expirationDate;
        this.purchasePrice=purchasePrice;
    }
//Вивід даних у консоль
    getProductionData(){
        return   this.id +". "+this.fullname+"|"+this.unitOfmasurement+"|"+this.expirationDate+"|"+this.purchasePrice;
    }
//Вивід даних у вигляді таблиці
getProductionDataAsRow() {
    return `
      <tr>
        <td>${this.id}</td>
        <td>${this.fullname}</td>
        <td>${this.unitOfmasurement}</td>
        <td>${this.expirationDate}</td>
        <td>${this.purchasePrice}</td>
        <td>
          <button class="edit-Production" data-id="${this.id}">EDIT</button>
          <button class="delete-Production" data-id="${this.id}">DELETE</button>
        </td>
      </tr>
    `;
  }
  
}
class ProductionList{
    constructor(){
        this.list=[];
        this.count=0;
    }
    addProduction(fullname, unitOfmasurement, expirationDate, purchasePrice ){
        this.count++;
        let newProduction = new Production(this.count, fullname, unitOfmasurement, expirationDate, purchasePrice);
        this.list.push(newProduction);
        return this.count;
       
    }
    editProduction(id,fullname, unitOfmasurement, expirationDate, purchasePrice){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list[i].setProductionData(fullname, unitOfmasurement, expirationDate, purchasePrice);
                break;
            }
        }
        return true;

    }
    deleteProduction(id){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list.splice(i,1);
            }
        }
        return true;
    }
    getProductionById(number){
        for(let i=0; i < this.list.length; i++){
            if(number==this.list[i].id){
               return this.list[i];
            }
        }
    }
    displayProductionListToConsole(){
        for(let i=0; i < this.list.length; i++){
            console.log(this.list[i].getProductionData());
        }
      
    }
    displayProductionListToPage(){
		let rowContent=``;
		for(let i=0;i<this.list.length;i++){
			rowContent+=this.list[i].getProductionDataAsRow();
		}
		return `<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>FULLName</th>
							<th>Unit Of masurement</th>
							<th>Expiration Date</th>
							<th>Purchase price</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					`+rowContent+`
					</tbody
				</table>`;
	}
    
    
}
class Provision{
    constructor(id, date, amount, salePrice){
        this.id=id;
        this.date=date;
        this.amount=amount;
        this.salePrice=salePrice;
    }

//Запис даних підприємства
    setProvisionData(date, amount, salePrice ){
        this.date=date;
        this.amount=amount;
        this.salePrice=salePrice;
    }
//Вивід даних у консоль
    getProvisionData(){
        return   this.id +". "+this.date+"|"+this.amount+"|"+this.salePrice;
    }
//Вивід даних у вигляді таблиці
getProvisionDataAsRow() {
    return `
      <tr>
        <td>${this.id}</td>
        <td>${this.date}</td>
        <td>${this.amount}</td>
        <td>${this.salePrice}</td>
        <td>
          <button class="edit-Provision" data-id="${this.id}">EDIT</button>
          <button class="delete-Provision" data-id="${this.id}">DELETE</button>
        </td>
      </tr>
    `;
  }
  
}
class ProvisionList{
    constructor(){
        this.list=[];
        this.count=0;
    }
    addProvision(date, amount, salePrice ){
        this.count++;
        let newProvision = new Provision(this.count, date, amount, salePrice);
        this.list.push(newProvision);
        return this.count;
       
    }
    editProvision(id,date, amount, salePrice){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list[i].setProvisionData(date, amount, salePrice);
                break;
            }
        }
        return true;

    }
    deleteProvision(id){
        for(let i=0; i < this.list.length; i++){
            if(id==this.list[i].id){
                this.list.splice(i,1);
            }
        }
        return true;
    }
    getProvisionById(number){
        for(let i=0; i < this.list.length; i++){
            if(number==this.list[i].id){
               return this.list[i];
            }
        }
    }
    displayProvisionListToConsole(){
        for(let i=0; i < this.list.length; i++){
            console.log(this.list[i].getProvisionData());
        }
      
    }
    displayProvisionListToPage(){
		let rowContent=``;
		for(let i=0;i<this.list.length;i++){
			rowContent+=this.list[i].getProvisionDataAsRow();
		}
		return `<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Date</th>
							<th>Amount</th>
							<th>Sale price</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
					`+rowContent+`
					</tbody
				</table>`;
	}
    
    
}
class ApiService{
	constructor(apiUrl){
		this.apiUrl=apiUrl;
	}
	postApiData(data){
		fetch(this.apiUrl,
		{
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			method: "POST",
			body: JSON.stringify(data)
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	}
	putApiData(data){
		fetch(this.apiUrl,
		{
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			method: "PUT",
			body: JSON.stringify(data)
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	}
	deleteApiData(data){
		fetch(this.apiUrl,
		{
			headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
			},
			method: "DELETE",
			body: JSON.stringify(data)
		})
		.then(function(res){ console.log(res) })
		.catch(function(res){ console.log(res) })
	}
}
let provisionApi=new ApiService('http://46.101.212.120/js-course/api.php');
let productionApi=new ApiService('http://46.101.212.120/js-course/api.php');
let factoryApi=new ApiService('http://46.101.212.120/js-course/api.php');
//ініціація списку підприємств
let factoryList=new FactoryList();
fetch('https://faust1121212.github.io/SPA/factory.json').then(function(response){
	response.json().then( function(data){
        for(let i=0;i<data.factory.length;i++){
            let factoryId=factoryList.addFactory(data.factory[i].name,data.factory[i].numberOFemployees,data.factory[i].kindOFactivities);
        }
        factoryList.displayFactoryListToConsole();
    
	} );
});
let productionList=new ProductionList();
fetch('http://localhost/JS/data/production.json').then(function(response){
	response.json().then( function(data){
        for(let i=0;i<data.production.length;i++){
            let productionId=productionList.addProduction(data.production[i].fullname,data.production[i].unitOfmasurement,data.production[i].expirationDate,data.production[i].purchasePrice);
        }
        productionList.displayProductionListToConsole();
	} );
});
let provisionList=new ProvisionList();
fetch('http://localhost/JS/data/provision.json').then(function(response){
	response.json().then( function(data){
        for(let i=0;i<data.provision.length;i++){
            let provisionId=provisionList.addProvision(data.provision[i].date,data.provision[i].amount,data.provision[i].salePrice);
        }
        provisionList.displayProvisionListToConsole();
	} );
});
factoryApi.postApiData()
