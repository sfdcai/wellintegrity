document.getElementById('integrityForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const barrierType = document.getElementById('barrierType').value;
    const status = document.getElementById('status').value;
    
    const output = document.getElementById('output');
    output.innerHTML = `<p>Barrier Type: ${barrierType}</p><p>Status: ${status}</p>`;
});