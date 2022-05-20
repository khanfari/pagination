
const list_items = [
	"english 1",
	"tamil 2",
	"hindi 3",
	"telugu 4",
	"marati 5",
	"gujarathi 6",
	"bengoli 7",
	"fresh 8",
	"dogri 9",
	"konkani 10",
	"odhia 11",
	"punjabi 12",
	"urdu 13",
	"assamese 14",
	"bodo 15",
	"konkani 16",
	"odhia 17",
	"punjabi 18",
	"urdu 19",
	"assamese 20",
	"hindi 21",
	"telugu 22",
	"marati 23",
	"gujarathi 24",
	"bengoli 25",
];
let items=list_items;
const list_element = document.getElementById('list');
const pagination_element = document.getElementById('pagination');

var current_page = 1;
var rows = 5;

let searchbar = document.getElementById("searchbar")
let search="";

function searchtext(e){  
	
	console.log(e.target.value);
	search = e.target.value
	console.log(search,"search");
	
	// else if(search===""){
	// 	items=list_items;
	// 	pagination_element=""
		
	// }
	DisplayList(list_items, list_element, rows, current_page);
	
	SetupPagination(list_items, pagination_element, rows);
	
	}


function demo(e){
	console.log(e);
	const setRow = e.target.value ;
	rows = setRow
	console.log(e.target.value);
	
	DisplayList(list_items, list_element,setRow , current_page);
	
    
}
function DisplayList (items, wrapper, rows_per_page, page,pagination_element="") {
	wrapper.innerHTML = "";
	 //pagination_element="";
	console.log(items,"items");
	
	page--;
	if(search!==""){
		items=items.filter((r)=>{
			return r.toLowerCase().includes(search.toLowerCase());
		})
		current_page=1;
		
	}

	const firstrow = rows_per_page * page;
	var lastrow= firstrow + rows_per_page;
	var pItems = items.slice(firstrow, lastrow);

console.log(pItems);

	for (var i = 0; i < pItems.length; i++) {
		var item = pItems[i];

		const item1 = document.createElement('div');
		item1.classList.add('item');
		item1.innerText = item;
		
		wrapper.appendChild(item1);
	}
	
	
}
// DisplayList.innerHTML=current_page+"of"+page_count();

function SetupPagination (items, wrapper, rows_per_page,pagination_element) {
	wrapper.innerHTML = "";
	pagination_element=""
	const page_count = Math.ceil(items.length / rows_per_page);
	for (var i = 1; i < page_count + 1; i++) {
		var btn = PButton(i, items);
		wrapper.appendChild(btn);
	}
}

function PButton (page, items) {
	const button = document.createElement('button');
	button.innerText = page;

	if (current_page == page) button.classList.add('active');

	button.addEventListener('click', function () {
		current_page = page;
		DisplayList(items, list_element, rows, current_page);
 
		 
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');
 
		button.classList.add('active');
	});

	return button;
}

DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows,);


