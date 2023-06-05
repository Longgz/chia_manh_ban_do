// Define WGS84 and VN2000 projections
proj4.defs("EPSG:4326", "+proj=longlat +datum=WGS84 +no_defs");
proj4.defs(
    "EPSG:3405",
    "+proj=utm +zone=48 +ellps=WGS84 +towgs84=-191.90441429,-39.30318279,-111.45032835,-0.00928836,0.01975479,-0.00427372,0.252906278157 +units=m +no_defs"
);

// x là kinh độ (long), y là vĩ độ (lat)
function lay_toa_do(kieu_convert) {
    let vn2000_x = document.getElementById("vn2000_x");
    let vn2000_y = document.getElementById("vn2000_y");
    let wgs84_x = document.getElementById("wgs84_x");
    let wgs84_y = document.getElementById("wgs84_y");

    if (kieu_convert === "vn2000towgs84") {
        let vn2000_x_val = Number(vn2000_x.value);
        let vn2000_y_val = Number(vn2000_y.value);
        if (vn2000_x_val === "" || vn2000_y_val === "") {
            alert("Vui lòng nhập đầy đủ dữ liệu để chuyển đổi!");
        } else {
            let wgs84 = proj4("EPSG:3405", "EPSG:4326", [
                vn2000_x_val,
                vn2000_y_val,
            ]);
            wgs84_x.value = wgs84[0];
            wgs84_y.value = wgs84[1];
        }
    } else {
        let wgs84_x_val = Number(wgs84_x.value);
        let wgs84_y_val = Number(wgs84_y.value);
        if (wgs84_x_val === "" || wgs84_y_val === "") {
            alert("Vui lòng nhập đầy đủ dữ liệu để chuyển đổi!");
        } else {
            let vn2000 = proj4("EPSG:4326", "EPSG:3405", [
                wgs84_x_val,
                wgs84_y_val,
            ]);
            vn2000_x.value = vn2000[0];
            vn2000_y.value = vn2000[1];
        }
    }
}
