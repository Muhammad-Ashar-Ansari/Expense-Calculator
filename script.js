let previous_balance = document.getElementById('previous-balance');
let fri_donation = document.getElementById('fri-donation');
let rent = document.getElementById('rent');
let other_donation = document.getElementById('other-donation');
let total_result = document.getElementById('total-result');

document.getElementById('submit').addEventListener('click', function(event) {
    event.preventDefault(); 
    
    let pb = parseFloat(previous_balance.value) || 0;
    let fd = parseFloat(fri_donation.value) || 0;
    let r = parseFloat(rent.value) || 0;
    let od = parseFloat(other_donation.value) || 0;

    let result = pb + fd + r + od;

    total_result.textContent = `${result} Rs`;
});

let required = document.getElementById('pdf_btn').addEventListener('click', function(event){
    if(pb === '' || fd === '' || r === '' || od === ''){
        alert('Please fill all the information!');
    }
});

function downloadPDF() {
  const element = document.getElementById("pdf-section");

  const opt = {
    margin: 0.5,
    filename: 'donation-summary.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  };

  html2pdf().set(opt).from(element).save();
}
