document.getElementById("buttonAdd").addEventListener("click", () => {
    // hasil convert untuk file .env
    const sumberValue = document.getElementById("form").value;
    const lines = sumberValue.split("\n");
    const capitalizedLines = lines.map(line => {
        const withoutQuotes = line.replace(/[',"]/g, "");
        const capitalizedLine = withoutQuotes.replace(/([^:]*)([:=])/, (match, p1, p2) => p1.toUpperCase() + p2);
        return "VITE_" + capitalizedLine;
    });
    const prefixedValue = capitalizedLines.join("\n");
    document.getElementById("env1").value = prefixedValue;//End
    // PEMISAH
    // hasil convert untuk diimport
    var inputValue = document.getElementById("env1").value;
    var textBeforeColon = inputValue.split(":")[0];
    var modifiedText = textBeforeColon.replace(/:/g, "=");
    //
    const sumberValue2 = document.getElementById("form").value;
    const filteredValue2 = sumberValue2.replace(/"[^"]*"/g, ""); // Menghapus semua karakter di dalam tanda kutip ganda (" ")
    const lines2 = filteredValue2.split("\n"); // Memisahkan baris teks menjadi array berdasarkan karakter baris baru (\n)
    const prefixedLines2 = lines2.map(line => line + "import.meta.env." + prefixedValue); // Menambahkan kata di depan setiap baris
    const prefixedValue2 = prefixedLines2.join("\n"); // Menggabungkan baris yang telah diproses kembali menjadi teks dengan karakter baris baru (\n)
    document.getElementById("env2").value = prefixedValue2;
    var env2 = document.getElementById('env2');
    var value = env2.value;
    var hapusKoma = value.replace(/,/g, '');
    env2.value = hapusKoma;
    // otw scroll
    document.getElementById("env1").scrollIntoView();
});

// Copy Text
document.getElementById("copyText").addEventListener("click", () => {
    // Get the text field
    var copyText = document.getElementById("env1");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Berhasil Tersalin ");
})