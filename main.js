function convert_from_degree_to_second(...degree) {
    return degree[0][0] * 3600 + degree[0][1] * 60 + degree[0][2];
}

function convert_from_second_to_degree(second) {
    let degree = Math.floor(second / 3600);
    let minute = Math.floor((second - degree * 3600) / 60);
    second = second - degree * 3600 - minute * 60;
    return [degree, minute, second];
}

// 500.000, 1.000.000 HN72 va VN2000 giong nhau

let test1_do_kinh = [102, 53, 07];
let test1_do_vi = [22, 15, 03];

// let test1_do_kinh = [102, 0, 0];
// let test1_do_vi = [24, 0, 0];

let test1_do_kinh_second = convert_from_degree_to_second(test1_do_kinh);
let test1_do_vi_second = convert_from_degree_to_second(test1_do_vi);

let vi_tri_kinh_do = "D"; // 'T' hoặc 'D'
let vi_tri_vi_do = "B"; // 'B' hoặc 'N'

let chia_manh;
let he_toa_do = "hn_72"; // hn_72, vn2000, utm_qt

let tree_hn_72 = document.querySelector(".hn_72");
let tree_vn2000 = document.querySelector(".vn_2000");
let tree_utm_qt = document.querySelector(".utm_qt");

var ten_dai = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
];

// if (vi_tri_kinh_do === "T") {
//     test1_do_kinh_second =
//         convert_from_degree_to_second([180, 0, 0]) - test1_do_kinh_second;
// }

function HN_72_1000000(do_vi, do_kinh, vi_tri_kinh_do) {
    let tmp_ki_tu = Math.floor(
        do_vi / convert_from_degree_to_second([4, 0, 0])
    );
    let ki_tu = ten_dai[tmp_ki_tu];

    let tmp = 0;
    if (vi_tri_kinh_do === "D") {
        tmp = 30;
    }

    let so =
        Math.floor(do_kinh / convert_from_degree_to_second([6, 0, 0])) +
        tmp +
        1; // +1 +30

    let do_vi_du = do_vi - tmp_ki_tu * convert_from_degree_to_second([4, 0, 0]);
    let do_kinh_du =
        do_kinh - (so - tmp - 1) * convert_from_degree_to_second([6, 0, 0]);

    if (do_vi_du === 0 && do_kinh_du === 0) {
        // F-48 F-49
        // E-48 E-48
        return [
            ten_dai[tmp_ki_tu] + "-" + String(so - 1),
            ten_dai[tmp_ki_tu] + "-" + String(so),
            ten_dai[tmp_ki_tu - 1] + "-" + String(so - 1),
            ten_dai[tmp_ki_tu - 1] + "-" + String(so),
        ];
    } else if (do_vi_du === 0) {
        // E
        // F
        return [
            [ten_dai[tmp_ki_tu] + "-" + String(so), do_vi_du, do_kinh_du],
            [
                ten_dai[tmp_ki_tu - 1] + "-" + String(so),
                convert_from_degree_to_second([3, 59, 59]),
                do_kinh_du,
            ],
        ];
    } else if (do_kinh_du === 0) {
        // 48 49
        return [
            [
                ki_tu + "-" + String(so - 1),
                do_vi_du,
                convert_from_degree_to_second([5, 59, 59]),
            ],
            [ki_tu + "-" + String(so), do_vi_du, do_kinh_du],
        ];
    }
    return [ki_tu + "-" + String(so), do_vi_du, do_kinh_du];
}

function HN_72_500000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_500000_hn_72 = ["A", "B", "C", "D"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([2, 0, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([3, 0, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([3, 0, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([2, 0, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 2x2: A B
    //                        C D
    let ki_tu = chia_manh_500000_hn_72[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_250000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_250000_hn_72 = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
    ];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([1, 20, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([2, 0, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([1, 20, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([2, 0, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 3 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 3x3:
    let ki_tu = chia_manh_250000_hn_72[hang_ngang * 3 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_200000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_200000_hn_72 = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
        "XIV",
        "XV",
        "XVI",
        "XVII",
        "XVIII",
        "XIX",
        "XX",
        "XXI",
        "XXII",
        "XXIII",
        "XXIV",
        "XXXV",
        "XXVI",
        "XXVII",
        "XXVIII",
        "XXIX",
        "XXX",
        "XXXI",
        "XXXII",
        "XXXIII",
        "XXXIV",
        "XXXV",
        "XXXVI",
    ];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 40, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([1, 0, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 40, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([1, 0, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 6 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 6x6:
    let ki_tu = chia_manh_200000_hn_72[hang_ngang * 6 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_100000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 20, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 30, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 30, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 20, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 12 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 12x12:
    let ki_tu = String(hang_ngang * 12 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_50000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_50000_hn_72 = ["A", "B", "C", "D"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 10, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 15, 0])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 10, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 15, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 100.000 chia 2x2: A B
    //                      C D
    let ki_tu = chia_manh_50000_hn_72[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_25000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_25000_hn_72 = ["a", "b", "b", "d"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 5, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 7, 30])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 5, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 7, 30]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 100.000 chia 2x2: a b
    //                      c d
    let ki_tu = chia_manh_25000_hn_72[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_10000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_10000_hn_72 = ["1", "2", "3", "4"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 2, 30])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 3, 45])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 2, 30]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 3, 45]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 100.000 chia 2x2: 1 2
    //                      3 4
    let ki_tu = chia_manh_10000_hn_72[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_5000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 1, 15])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 1, 52.5])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 1, 15]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 1, 52.5]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 16 - hang_ngang - 1;
    }
    // Tu 100.000 chia 16x16:
    let ki_tu = String(hang_ngang * 16 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function HN_72_2000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_2000_hn_72 = [
        "i",
        "ii",
        "iii",
        "iv",
        "v",
        "vi",
        "vii",
        "viii",
        "ix",
    ];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 0, 25])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 0, 37.5])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 0, 25]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 0, 37.5]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 3 - hang_ngang - 1;
    }
    // Tu 5.000 chia 3x3:
    let ki_tu = chia_manh_2000_hn_72[hang_ngang * 3 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function chia_manh_1000000_hn_72() {
    let manh_1000000 = HN_72_1000000(
        test1_do_vi_second,
        test1_do_kinh_second,
        vi_tri_kinh_do
    );
    if (manh_1000000.length === 2) {
        return [
            chia_manh_hn_72(manh_1000000[0]),
            chia_manh_hn_72(manh_1000000[1]),
        ];
    } else if (manh_1000000.length === 4) {
        let manh_1 = [
            manh_1000000[0],
            manh_1000000[0] + "-" + "D",
            manh_1000000[0] + "-" + "IX",
            manh_1000000[0] + "-" + "XXXVI",
            manh_1000000[0] + "-" + "144",
            manh_1000000[0] + "-" + "144" + "-" + "D",
            manh_1000000[0] + "-" + "144" + "-" + "D" + "-" + "d",
            manh_1000000[0] + "-" + "144" + "-" + "D" + "-" + "d" + "-" + "4",
            manh_1000000[0] + "-" + "144" + "(" + "256" + ")",
            manh_1000000[0] + "-" + "144" + "(" + "256" + "ix" + ")",
        ];
        let manh_2 = [
            manh_1000000[1],
            manh_1000000[1] + "-" + "C",
            manh_1000000[1] + "-" + "VII",
            manh_1000000[1] + "-" + "XXXI",
            manh_1000000[1] + "-" + "123",
            manh_1000000[1] + "-" + "123" + "-" + "C",
            manh_1000000[1] + "-" + "123" + "-" + "C" + "-" + "c",
            manh_1000000[1] + "-" + "123" + "-" + "C" + "-" + "c" + "-" + "3",
            manh_1000000[1] + "-" + "123" + "(" + "241" + ")",
            manh_1000000[1] + "-" + "123" + "(" + "241" + "vii" + ")",
        ];
        let manh_3 = [
            manh_1000000[2],
            manh_1000000[2] + "-" + "B",
            manh_1000000[2] + "-" + "III",
            manh_1000000[2] + "-" + "VI",
            manh_1000000[2] + "-" + "12",
            manh_1000000[2] + "-" + "12" + "-" + "B",
            manh_1000000[2] + "-" + "12" + "-" + "B" + "-" + "b",
            manh_1000000[2] + "-" + "12" + "-" + "B" + "-" + "b" + "-" + "2",
            manh_1000000[2] + "-" + "12" + "(" + "16" + ")",
            manh_1000000[2] + "-" + "12" + "(" + "16" + "vii" + ")",
        ];
        let manh_4 = [
            manh_1000000[3],
            manh_1000000[3] + "-" + "A",
            manh_1000000[3] + "-" + "I",
            manh_1000000[3] + "-" + "I",
            manh_1000000[3] + "-" + "1",
            manh_1000000[3] + "-" + "1" + "-" + "A",
            manh_1000000[3] + "-" + "1" + "-" + "A" + "-" + "a",
            manh_1000000[3] + "-" + "1" + "-" + "A" + "-" + "a" + "-" + "1",
            manh_1000000[3] + "-" + "1" + "(" + "1" + ")",
            manh_1000000[3] + "-" + "1" + "(" + "1" + "i" + ")",
        ];
        return [manh_1, manh_2, manh_3, manh_4];
    }
    return chia_manh_hn_72(manh_1000000);
}

function chia_manh_hn_72(manh_1000000) {
    let manh_500000 = HN_72_500000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_250000 = HN_72_250000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_200000 = HN_72_200000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_100000 = HN_72_100000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_50000 = HN_72_50000(manh_100000[1], manh_100000[2], vi_tri_vi_do);
    let manh_25000 = HN_72_25000(manh_50000[1], manh_50000[2], vi_tri_vi_do);
    let manh_10000 = HN_72_10000(manh_25000[1], manh_25000[2], vi_tri_vi_do);
    let manh_5000 = HN_72_5000(manh_100000[1], manh_100000[2], vi_tri_vi_do);
    let manh_2000 = HN_72_2000(manh_5000[1], manh_5000[2], vi_tri_vi_do);
    let ki_phap_manh_500000 = manh_1000000[0] + "-" + manh_500000[0];
    let ki_phap_manh_250000 = manh_1000000[0] + "-" + manh_250000[0];
    let ki_phap_manh_200000 = manh_1000000[0] + "-" + manh_200000[0];
    let ki_phap_manh_100000 = manh_1000000[0] + "-" + manh_100000[0];
    let ki_phap_manh_50000 = ki_phap_manh_100000 + "-" + manh_50000[0];
    let ki_phap_manh_25000 = ki_phap_manh_50000 + "-" + manh_25000[0];
    let ki_phap_manh_10000 = ki_phap_manh_25000 + "-" + manh_10000[0];
    let ki_phap_manh_5000 = ki_phap_manh_100000 + "(" + manh_5000[0] + ")";
    let ki_phap_manh_2000 =
        ki_phap_manh_100000 + "(" + manh_5000[0] + manh_2000[0] + ")";
    return [
        manh_1000000[0],
        ki_phap_manh_500000,
        ki_phap_manh_250000,
        ki_phap_manh_200000,
        ki_phap_manh_100000,
        ki_phap_manh_50000,
        ki_phap_manh_25000,
        ki_phap_manh_10000,
        ki_phap_manh_5000,
        ki_phap_manh_2000,
    ];
}

// VN_2000
function VN2000_250000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([1, 0, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([1, 30, 0])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([1, 0, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([1, 30, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }

    // Tu 500.000 chia 2x2: 1 2
    //                      3 4
    let ki_tu = String(hang_ngang * 2 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_100000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 30, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 30, 0])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 30, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 30, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 8 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 8x12:
    let ki_tu = String(hang_ngang * 12 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_50000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_50000_vn2000 = ["A", "B", "C", "D"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 15, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 15, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 15, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 15, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 100.000 chia 2x2: A B
    //                      C D
    let ki_tu = chia_manh_50000_vn2000[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_25000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_25000_vn2000 = ["a", "b", "c", "d"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 7, 30])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 7, 30])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 7, 30]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 7, 30]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 50.000 chia 2x2: a b
    //                     c d
    let ki_tu = chia_manh_25000_vn2000[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_10000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_10000_vn2000 = ["1", "2", "3", "4"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 3, 45])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 3, 45])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 1, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 1, 30]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 25.000 chia 2x2: 1 2
    //                     3 4
    let ki_tu = String(hang_ngang * 2 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_5000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 1, 52.5])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 1, 52.5])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 1, 52.5]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 1, 52.5]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 16 - hang_ngang - 1;
    }
    // Tu 100.000 chia 16x16:
    let ki_tu = String(hang_ngang * 16 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_2000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_2000_vn_2000 = ["a", "b", "c", "d", "e", "f", "g", "h", "k"]; // bo qua i,j tranh nham voi 1
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 0, 37.5])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 0, 37.5])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 0, 37.5]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 0, 37.5]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 3 - hang_ngang - 1;
    }
    // Tu 5.000 chia 3x3:
    let ki_tu = chia_manh_2000_vn_2000[hang_ngang * 3 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_1000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_1000_vn2000 = ["I", "II", "III", "IV"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 0, 18.75])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 0, 18.75])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 0, 18.75]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 0, 18.75]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 1.000 chia 2x2:
    let ki_tu = chia_manh_1000_vn2000[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function VN2000_500(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 0, 9.38])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 0, 9.38])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 0, 9.38]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 0, 9.38]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 4 - hang_ngang - 1;
    }
    // Tu 2.000 chia 4x4:
    let ki_tu = String(hang_ngang * 4 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function chia_manh_1000000_vn2000() {
    let manh_1000000 = HN_72_1000000(
        test1_do_vi_second,
        test1_do_kinh_second,
        vi_tri_kinh_do
    );
    if (manh_1000000.length === 2) {
        return [
            chia_manh_vn2000(manh_1000000[0]),
            chia_manh_vn2000(manh_1000000[1]),
        ];
    } else if (manh_1000000.length === 4) {
        let manh_1 = [
            manh_1000000[0],
            manh_1000000[0] + "-" + "D",
            manh_1000000[0] + "-" + "4",
            manh_1000000[0] + "-" + "96",
            manh_1000000[0] + "-" + "96" + "-" + "D",
            manh_1000000[0] + "-" + "96" + "-" + "D" + "-" + "d",
            manh_1000000[0] + "-" + "96" + "-" + "D" + "-" + "d" + "-" + "4",
            manh_1000000[0] + "-" + "96" + "(" + "256" + ")",
            manh_1000000[0] + "-" + "96" + "(" + "256" + "k" + ")",
            manh_1000000[0] + "-" + "96" + "(" + "256" + "k" + "IV" + ")",
            manh_1000000[0] + "-" + "96" + "(" + "256" + "k" + "16" + ")",
        ];
        let manh_2 = [
            manh_1000000[1],
            manh_1000000[1] + "-" + "C",
            manh_1000000[1] + "-" + "3",
            manh_1000000[1] + "-" + "85",
            manh_1000000[1] + "-" + "85" + "-" + "C",
            manh_1000000[1] + "-" + "85" + "-" + "C" + "-" + "c",
            manh_1000000[1] + "-" + "85" + "-" + "C" + "-" + "c" + "-" + "3",
            manh_1000000[1] + "-" + "85" + "(" + "241" + ")",
            manh_1000000[1] + "-" + "85" + "(" + "241" + "g" + ")",
            manh_1000000[1] + "-" + "85" + "(" + "241" + "g" + "III" + ")",
            manh_1000000[1] + "-" + "85" + "(" + "241" + "g" + "13" + ")",
        ];
        let manh_3 = [
            manh_1000000[2],
            manh_1000000[2] + "-" + "B",
            manh_1000000[2] + "-" + "2",
            manh_1000000[2] + "-" + "12",
            manh_1000000[2] + "-" + "12" + "-" + "B",
            manh_1000000[2] + "-" + "12" + "-" + "B" + "-" + "b",
            manh_1000000[2] + "-" + "12" + "-" + "B" + "-" + "b" + "-" + "2",
            manh_1000000[2] + "-" + "12" + "(" + "16" + ")",
            manh_1000000[2] + "-" + "12" + "(" + "16" + "c" + ")",
            manh_1000000[2] + "-" + "12" + "(" + "16" + "c" + "II" + ")",
            manh_1000000[2] + "-" + "12" + "(" + "16" + "c" + "4" + ")",
        ];
        let manh_4 = [
            manh_1000000[3],
            manh_1000000[3] + "-" + "A",
            manh_1000000[3] + "-" + "1",
            manh_1000000[3] + "-" + "1",
            manh_1000000[3] + "-" + "1" + "-" + "A",
            manh_1000000[3] + "-" + "1" + "-" + "A" + "-" + "a",
            manh_1000000[3] + "-" + "1" + "-" + "A" + "-" + "a" + "-" + "1",
            manh_1000000[3] + "-" + "1" + "(" + "1" + ")",
            manh_1000000[3] + "-" + "1" + "(" + "1" + "a" + ")",
            manh_1000000[3] + "-" + "1" + "(" + "1" + "a" + "I" + ")",
            manh_1000000[3] + "-" + "1" + "(" + "1" + "a" + "1" + ")",
        ];
        return [manh_1, manh_2, manh_3, manh_4];
    }
    return chia_manh_vn2000(manh_1000000);
}

function chia_manh_vn2000(manh_1000000) {
    let manh_500000 = HN_72_500000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_250000 = VN2000_250000(
        manh_500000[1],
        manh_500000[2],
        vi_tri_vi_do
    );
    let manh_100000 = VN2000_100000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_50000 = VN2000_50000(manh_100000[1], manh_100000[2], vi_tri_vi_do);
    let manh_25000 = VN2000_25000(manh_50000[1], manh_50000[2], vi_tri_vi_do);
    let manh_10000 = VN2000_10000(manh_25000[1], manh_25000[2], vi_tri_vi_do);
    let manh_5000 = VN2000_5000(manh_100000[1], manh_100000[2], vi_tri_vi_do);
    let manh_2000 = VN2000_2000(manh_5000[1], manh_5000[2], vi_tri_vi_do);
    let manh_1000 = VN2000_1000(manh_2000[1], manh_2000[2], vi_tri_vi_do);
    let manh_500 = VN2000_500(manh_2000[1], manh_2000[2], vi_tri_vi_do);
    let ki_phap_manh_500000 = manh_1000000[0] + "-" + manh_500000[0];
    let ki_phap_manh_250000 = ki_phap_manh_500000 + "-" + manh_250000[0];
    let ki_phap_manh_100000 = manh_1000000[0] + "-" + manh_100000[0];
    let ki_phap_manh_50000 = ki_phap_manh_100000 + "-" + manh_50000[0];
    let ki_phap_manh_25000 = ki_phap_manh_50000 + "-" + manh_25000[0];
    let ki_phap_manh_10000 = ki_phap_manh_25000 + "-" + manh_10000[0];
    let ki_phap_manh_5000 = ki_phap_manh_100000 + "(" + manh_5000[0] + ")";
    let ki_phap_manh_2000 =
        ki_phap_manh_100000 + "(" + manh_5000[0] + "-" + manh_2000[0] + ")";
    let ki_phap_manh_1000 =
        ki_phap_manh_100000 +
        "(" +
        manh_5000[0] +
        "-" +
        manh_2000[0] +
        "-" +
        manh_1000[0] +
        ")";
    let ki_phap_manh_500 =
        ki_phap_manh_100000 +
        "(" +
        manh_5000[0] +
        "-" +
        manh_2000[0] +
        "-" +
        manh_500[0] +
        ")";
    return [
        manh_1000000[0],
        ki_phap_manh_500000,
        ki_phap_manh_250000,
        ki_phap_manh_100000,
        ki_phap_manh_50000,
        ki_phap_manh_25000,
        ki_phap_manh_10000,
        ki_phap_manh_5000,
        ki_phap_manh_2000,
        ki_phap_manh_1000,
        ki_phap_manh_500,
    ];
}

// UTM QT
function UTM_QT_1000000(do_vi, do_kinh, vi_tri_kinh_do, vi_tri_vi_do) {
    let tmp_ki_tu = Math.floor(
        do_vi / convert_from_degree_to_second([4, 0, 0])
    );

    let ki_tu = ten_dai[tmp_ki_tu];

    let tmp = 0;
    if (vi_tri_kinh_do === "D") {
        tmp = 30;
    }

    let tmp2 = "S";
    if (vi_tri_vi_do === "B") {
        tmp2 = "N";
    }

    let so =
        Math.floor(do_kinh / convert_from_degree_to_second([6, 0, 0])) +
        tmp +
        1; // +1 +30

    let do_vi_du = do_vi - tmp_ki_tu * convert_from_degree_to_second([4, 0, 0]);
    let do_kinh_du =
        do_kinh - (so - tmp - 1) * convert_from_degree_to_second([6, 0, 0]);

    return [tmp2 + ki_tu + "-" + String(so), do_vi_du, do_kinh_du];
}

function UTM_QT_500000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_500000_hn_72 = ["A", "B", "D", "C"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([2, 0, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([3, 0, 0])
    );

    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([3, 0, 0]);
    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([2, 0, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 2x2: A B
    //                        D C
    let ki_tu = chia_manh_500000_hn_72[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function UTM_QT_250000(do_vi, do_kinh, vi_tri_vi_do) {
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([1, 0, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([1, 30, 0])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([1, 0, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([1, 30, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 16 - hang_ngang - 1;
    }
    // Tu 1.000.000 chia 16x16:
    let ki_tu = String(hang_ngang * 16 + cot_doc + 1);
    return [ki_tu, do_vi_du, do_kinh_du];
}

function kiem_tra_chia_utm_qt(do_vi, do_kinh, vi_tri_kinh_do, vi_tri_vi_do) {
    let co_the_chia = true;
    let error =
        "Chia mảnh 100.000 và 50.000 UTM quốc tế ở phần mềm là quy ước ở khu vực Việt Nam. Vì vậy cần nhập kinh tuyến là 75° Đông trở đi về phía đông và vĩ tuyến 4° Nam trở về phía bắc để có thể chia được các mảnh này";
    if (vi_tri_kinh_do === "T") {
        co_the_chia = false;
    }
    if (vi_tri_kinh_do === "D") {
        if (do_kinh - convert_from_degree_to_second([75, 0, 0]) < 0) {
            co_the_chia = false;
        }
    }
    if (vi_tri_vi_do === "N") {
        if (do_vi > convert_from_degree_to_second([4, 0, 0])) {
            co_the_chia = false;
        }
    }
    return [co_the_chia, error];
}

function UTM_QT_100000(do_vi, do_kinh, vi_tri_kinh_do, vi_tri_vi_do) {
    if (vi_tri_vi_do === "N") {
        if (do_vi < convert_from_degree_to_second([4, 0, 0])) {
            do_vi = -do_vi;
        }
    }

    let cd_thap_phan = 2 * (do_kinh / 3600 - 75) - 1;
    let hn_thap_phan = 2 * (do_vi / 3600 + 4);
    let cd = Math.floor(cd_thap_phan);
    let hn = Math.floor(hn_thap_phan);
    let do_kinh_du = do_kinh - ((cd + 1) / 2 + 75) * 3600;
    let do_vi_du = do_vi - (hn / 2 - 4) * 3600;
    if (do_vi_du < 0) {
        do_vi_du = -do_vi_du;
    }
    if (cd < 10) {
        cd = `0${cd}`;
    }
    hn = hn + 1;
    if (hn < 10) {
        hn = `0${hn}`;
    }

    return [`${cd}${hn}`, do_vi_du, do_kinh_du];
}

function UTM_QT_50000(do_vi, do_kinh, vi_tri_vi_do) {
    var chia_manh_1000_vn2000 = ["IV", "I", "III", "II"];
    let hang_ngang = Math.floor(
        do_vi / convert_from_degree_to_second([0, 15, 0])
    );
    let cot_doc = Math.floor(
        do_kinh / convert_from_degree_to_second([0, 15, 0])
    );

    let do_vi_du =
        do_vi - hang_ngang * convert_from_degree_to_second([0, 15, 0]);
    let do_kinh_du =
        do_kinh - cot_doc * convert_from_degree_to_second([0, 15, 0]);

    if (vi_tri_vi_do === "B") {
        hang_ngang = 2 - hang_ngang - 1;
    }
    // Tu 1.000 chia 2x2:
    let ki_tu = chia_manh_1000_vn2000[hang_ngang * 2 + cot_doc];
    return [ki_tu, do_vi_du, do_kinh_du];
}

function chia_manh_utm_qt() {
    let manh_1000000 = UTM_QT_1000000(
        test1_do_vi_second,
        test1_do_kinh_second,
        vi_tri_kinh_do,
        vi_tri_vi_do
    );

    let manh_500000 = UTM_QT_500000(
        manh_1000000[1],
        manh_1000000[2],
        vi_tri_vi_do
    );
    let manh_250000 = UTM_QT_250000(
        manh_500000[1],
        manh_500000[2],
        vi_tri_vi_do
    );

    let kiem_tra = kiem_tra_chia_utm_qt(
        test1_do_vi_second,
        test1_do_kinh_second,
        vi_tri_kinh_do,
        vi_tri_vi_do
    );
    let ki_phap_manh_100000 = "NaN-NaN";
    let ki_phap_manh_50000 = "NaN-NaN-NaN";
    if (kiem_tra[0]) {
        let manh_100000 = UTM_QT_100000(
            test1_do_vi_second,
            test1_do_kinh_second,
            vi_tri_kinh_do,
            vi_tri_vi_do
        );
        let manh_50000 = UTM_QT_50000(
            manh_100000[1],
            manh_100000[2],
            vi_tri_vi_do
        );
        ki_phap_manh_100000 = manh_100000[0];
        ki_phap_manh_50000 = manh_100000[0] + "-" + manh_50000[0];
    } else {
        alert(kiem_tra[1]);
    }
    let ki_phap_manh_500000 = manh_1000000[0] + "-" + manh_500000[0];
    let ki_phap_manh_250000 = ki_phap_manh_500000 + "-" + manh_250000[0];
    return [
        manh_1000000[0],
        ki_phap_manh_500000,
        ki_phap_manh_250000,
        ki_phap_manh_100000,
        ki_phap_manh_50000,
    ];
}

function luu_so_lieu_manh() {
    let he_toa_do_1000000 = document.getElementById(`${he_toa_do}_1000000`);
    let he_toa_do_500000 = document.getElementById(`${he_toa_do}_500000`);
    let he_toa_do_250000 = document.getElementById(`${he_toa_do}_250000`);
    let he_toa_do_100000 = document.getElementById(`${he_toa_do}_100000`);
    let he_toa_do_50000 = document.getElementById(`${he_toa_do}_50000`);

    if (he_toa_do === "utm_qt") {
        chia_manh = chia_manh_utm_qt();

        he_toa_do_1000000.textContent = "";
        he_toa_do_500000.textContent = "";
        he_toa_do_250000.textContent = "";
        he_toa_do_100000.textContent = "";
        he_toa_do_50000.textContent = "";

        let newspan0 = document.createElement("span");
        newspan0.textContent = chia_manh[0];
        he_toa_do_1000000.appendChild(newspan0);

        let newspan1 = document.createElement("span");
        newspan1.textContent = chia_manh[1];
        he_toa_do_500000.appendChild(newspan1);

        let newspan2 = document.createElement("span");
        newspan2.textContent = chia_manh[2];
        he_toa_do_250000.appendChild(newspan2);

        let newspan3 = document.createElement("span");
        newspan3.textContent = chia_manh[3];
        he_toa_do_100000.appendChild(newspan3);

        let newspan4 = document.createElement("span");
        newspan4.textContent = chia_manh[4];
        he_toa_do_50000.appendChild(newspan4);
    } else {
        let he_toa_do_25000 = document.getElementById(`${he_toa_do}_25000`);
        let he_toa_do_10000 = document.getElementById(`${he_toa_do}_10000`);
        let he_toa_do_5000 = document.getElementById(`${he_toa_do}_5000`);
        let he_toa_do_2000 = document.getElementById(`${he_toa_do}_2000`);
        if (he_toa_do === "hn_72") {
            let he_toa_do_200000 = document.getElementById(
                `${he_toa_do}_200000`
            );
            chia_manh = chia_manh_1000000_hn_72();

            he_toa_do_1000000.textContent = "";
            he_toa_do_500000.textContent = "";
            he_toa_do_250000.textContent = "";
            he_toa_do_200000.textContent = "";
            he_toa_do_100000.textContent = "";
            he_toa_do_50000.textContent = "";
            he_toa_do_25000.textContent = "";
            he_toa_do_10000.textContent = "";
            he_toa_do_5000.textContent = "";
            he_toa_do_2000.textContent = "";
            if (chia_manh.length === 4) {
                for (let i = 0; i < 4; i++) {
                    let newspan0 = document.createElement("span");
                    newspan0.textContent = chia_manh[i][0];
                    he_toa_do_1000000.appendChild(newspan0);

                    let newspan1 = document.createElement("span");
                    newspan1.textContent = chia_manh[i][1];
                    he_toa_do_500000.appendChild(newspan1);

                    let newspan2 = document.createElement("span");
                    newspan2.textContent = chia_manh[i][2];
                    he_toa_do_250000.appendChild(newspan2);

                    let newspan3 = document.createElement("span");
                    newspan3.textContent = chia_manh[i][3];
                    he_toa_do_200000.appendChild(newspan3);

                    let newspan4 = document.createElement("span");
                    newspan4.textContent = chia_manh[i][4];
                    he_toa_do_100000.appendChild(newspan4);

                    let newspan5 = document.createElement("span");
                    newspan5.textContent = chia_manh[i][5];
                    he_toa_do_50000.appendChild(newspan5);

                    let newspan6 = document.createElement("span");
                    newspan6.textContent = chia_manh[i][6];
                    he_toa_do_25000.appendChild(newspan6);

                    let newspan7 = document.createElement("span");
                    newspan7.textContent = chia_manh[i][7];
                    he_toa_do_10000.appendChild(newspan7);

                    let newspan8 = document.createElement("span");
                    newspan8.textContent = chia_manh[i][8];
                    he_toa_do_5000.appendChild(newspan8);

                    let newspan9 = document.createElement("span");
                    newspan9.textContent = chia_manh[i][9];
                    he_toa_do_2000.appendChild(newspan9);
                }
            } else if (chia_manh.length === 2) {
                for (let i = 0; i < 2; i++) {
                    let newspan0 = document.createElement("span");
                    newspan0.textContent = chia_manh[i][0];
                    he_toa_do_1000000.appendChild(newspan0);

                    let newspan1 = document.createElement("span");
                    newspan1.textContent = chia_manh[i][1];
                    he_toa_do_500000.appendChild(newspan1);

                    let newspan2 = document.createElement("span");
                    newspan2.textContent = chia_manh[i][2];
                    he_toa_do_250000.appendChild(newspan2);

                    let newspan3 = document.createElement("span");
                    newspan3.textContent = chia_manh[i][3];
                    he_toa_do_200000.appendChild(newspan3);

                    let newspan4 = document.createElement("span");
                    newspan4.textContent = chia_manh[i][4];
                    he_toa_do_100000.appendChild(newspan4);

                    let newspan5 = document.createElement("span");
                    newspan5.textContent = chia_manh[i][5];
                    he_toa_do_50000.appendChild(newspan5);

                    let newspan6 = document.createElement("span");
                    newspan6.textContent = chia_manh[i][6];
                    he_toa_do_25000.appendChild(newspan6);

                    let newspan7 = document.createElement("span");
                    newspan7.textContent = chia_manh[i][7];
                    he_toa_do_10000.appendChild(newspan7);

                    let newspan8 = document.createElement("span");
                    newspan8.textContent = chia_manh[i][8];
                    he_toa_do_5000.appendChild(newspan8);

                    let newspan9 = document.createElement("span");
                    newspan9.textContent = chia_manh[i][9];
                    he_toa_do_2000.appendChild(newspan9);
                }
            } else {
                let newspan0 = document.createElement("span");
                newspan0.textContent = chia_manh[0];
                he_toa_do_1000000.appendChild(newspan0);

                let newspan1 = document.createElement("span");
                newspan1.textContent = chia_manh[1];
                he_toa_do_500000.appendChild(newspan1);

                let newspan2 = document.createElement("span");
                newspan2.textContent = chia_manh[2];
                he_toa_do_250000.appendChild(newspan2);

                let newspan3 = document.createElement("span");
                newspan3.textContent = chia_manh[3];
                he_toa_do_200000.appendChild(newspan3);

                let newspan4 = document.createElement("span");
                newspan4.textContent = chia_manh[4];
                he_toa_do_100000.appendChild(newspan4);

                let newspan5 = document.createElement("span");
                newspan5.textContent = chia_manh[5];
                he_toa_do_50000.appendChild(newspan5);

                let newspan6 = document.createElement("span");
                newspan6.textContent = chia_manh[6];
                he_toa_do_25000.appendChild(newspan6);

                let newspan7 = document.createElement("span");
                newspan7.textContent = chia_manh[7];
                he_toa_do_10000.appendChild(newspan7);

                let newspan8 = document.createElement("span");
                newspan8.textContent = chia_manh[8];
                he_toa_do_5000.appendChild(newspan8);

                let newspan9 = document.createElement("span");
                newspan9.textContent = chia_manh[9];
                he_toa_do_2000.appendChild(newspan9);
            }
        } else {
            let he_toa_do_1000 = document.getElementById(`${he_toa_do}_1000`);
            let he_toa_do_500 = document.getElementById(`${he_toa_do}_500`);
            chia_manh = chia_manh_1000000_vn2000();

            he_toa_do_1000000.textContent = "";
            he_toa_do_500000.textContent = "";
            he_toa_do_250000.textContent = "";
            he_toa_do_100000.textContent = "";
            he_toa_do_50000.textContent = "";
            he_toa_do_25000.textContent = "";
            he_toa_do_10000.textContent = "";
            he_toa_do_5000.textContent = "";
            he_toa_do_2000.textContent = "";
            he_toa_do_1000.textContent = "";
            he_toa_do_500.textContent = "";
            if (chia_manh.length === 4) {
                for (let i = 0; i < 4; i++) {
                    let newspan0 = document.createElement("span");
                    newspan0.textContent = chia_manh[i][0];
                    he_toa_do_1000000.appendChild(newspan0);

                    let newspan1 = document.createElement("span");
                    newspan1.textContent = chia_manh[i][1];
                    he_toa_do_500000.appendChild(newspan1);

                    let newspan2 = document.createElement("span");
                    newspan2.textContent = chia_manh[i][2];
                    he_toa_do_250000.appendChild(newspan2);

                    let newspan3 = document.createElement("span");
                    newspan3.textContent = chia_manh[i][3];
                    he_toa_do_100000.appendChild(newspan3);

                    let newspan4 = document.createElement("span");
                    newspan4.textContent = chia_manh[i][4];
                    he_toa_do_50000.appendChild(newspan4);

                    let newspan5 = document.createElement("span");
                    newspan5.textContent = chia_manh[i][5];
                    he_toa_do_25000.appendChild(newspan5);

                    let newspan6 = document.createElement("span");
                    newspan6.textContent = chia_manh[i][6];
                    he_toa_do_10000.appendChild(newspan6);

                    let newspan7 = document.createElement("span");
                    newspan7.textContent = chia_manh[i][7];
                    he_toa_do_5000.appendChild(newspan7);

                    let newspan8 = document.createElement("span");
                    newspan8.textContent = chia_manh[i][8];
                    he_toa_do_2000.appendChild(newspan8);

                    let newspan9 = document.createElement("span");
                    newspan9.textContent = chia_manh[i][9];
                    he_toa_do_1000.appendChild(newspan9);

                    let newspan10 = document.createElement("span");
                    newspan10.textContent = chia_manh[i][10];
                    he_toa_do_500.appendChild(newspan10);
                }
            } else if (chia_manh.length === 2) {
                for (let i = 0; i < 2; i++) {
                    let newspan0 = document.createElement("span");
                    newspan0.textContent = chia_manh[i][0];
                    he_toa_do_1000000.appendChild(newspan0);

                    let newspan1 = document.createElement("span");
                    newspan1.textContent = chia_manh[i][1];
                    he_toa_do_500000.appendChild(newspan1);

                    let newspan2 = document.createElement("span");
                    newspan2.textContent = chia_manh[i][2];
                    he_toa_do_250000.appendChild(newspan2);

                    let newspan3 = document.createElement("span");
                    newspan3.textContent = chia_manh[i][3];
                    he_toa_do_100000.appendChild(newspan3);

                    let newspan4 = document.createElement("span");
                    newspan4.textContent = chia_manh[i][4];
                    he_toa_do_50000.appendChild(newspan4);

                    let newspan5 = document.createElement("span");
                    newspan5.textContent = chia_manh[i][5];
                    he_toa_do_25000.appendChild(newspan5);

                    let newspan6 = document.createElement("span");
                    newspan6.textContent = chia_manh[i][6];
                    he_toa_do_10000.appendChild(newspan6);

                    let newspan7 = document.createElement("span");
                    newspan7.textContent = chia_manh[i][7];
                    he_toa_do_5000.appendChild(newspan7);

                    let newspan8 = document.createElement("span");
                    newspan8.textContent = chia_manh[i][8];
                    he_toa_do_2000.appendChild(newspan8);

                    let newspan9 = document.createElement("span");
                    newspan9.textContent = chia_manh[i][9];
                    he_toa_do_1000.appendChild(newspan9);

                    let newspan10 = document.createElement("span");
                    newspan10.textContent = chia_manh[i][10];
                    he_toa_do_500.appendChild(newspan10);
                }
            } else {
                let newspan0 = document.createElement("span");
                newspan0.textContent = chia_manh[0];
                he_toa_do_1000000.appendChild(newspan0);

                let newspan1 = document.createElement("span");
                newspan1.textContent = chia_manh[1];
                he_toa_do_500000.appendChild(newspan1);

                let newspan2 = document.createElement("span");
                newspan2.textContent = chia_manh[2];
                he_toa_do_250000.appendChild(newspan2);

                let newspan3 = document.createElement("span");
                newspan3.textContent = chia_manh[3];
                he_toa_do_100000.appendChild(newspan3);

                let newspan4 = document.createElement("span");
                newspan4.textContent = chia_manh[4];
                he_toa_do_50000.appendChild(newspan4);

                let newspan5 = document.createElement("span");
                newspan5.textContent = chia_manh[5];
                he_toa_do_25000.appendChild(newspan5);

                let newspan6 = document.createElement("span");
                newspan6.textContent = chia_manh[6];
                he_toa_do_10000.appendChild(newspan6);

                let newspan7 = document.createElement("span");
                newspan7.textContent = chia_manh[7];
                he_toa_do_5000.appendChild(newspan7);

                let newspan8 = document.createElement("span");
                newspan8.textContent = chia_manh[8];
                he_toa_do_2000.appendChild(newspan8);

                let newspan9 = document.createElement("span");
                newspan9.textContent = chia_manh[9];
                he_toa_do_1000.appendChild(newspan9);

                let newspan10 = document.createElement("span");
                newspan10.textContent = chia_manh[10];
                he_toa_do_500.appendChild(newspan10);
            }
        }
    }
}

luu_so_lieu_manh();

function lay_du_lieu(he_toa_do_click) {
    he_toa_do = he_toa_do_click;

    let geometry_wgs84_x = document.getElementById("geometry_wgs84_x");
    let geometry_wgs84_y = document.getElementById("geometry_wgs84_y");

    geometry_wgs84_x.value = "";
    geometry_wgs84_y.value = "";

    test1_do_vi = [];
    test1_do_kinh = [];

    let du_lieu_hop_le = true;
    let du_lieu_day_du = true;

    let do_vi_value = document.querySelectorAll(".vi-do input[type='number']");
    let do_vi_direction = document.querySelector(
        'input[name = "vi_do"]:checked'
    );

    let do_kinh_value = document.querySelectorAll(
        ".kinh-do input[type='number']"
    );
    let do_kinh_direction = document.querySelector(
        'input[name = "kinh_do"]:checked'
    );

    for (let i = 0; i < do_vi_value.length; i++) {
        if (do_vi_value[i].value != "" && do_kinh_value[i].value != "") {
            test1_do_vi[i] = Number(do_vi_value[i].value);
            test1_do_kinh[i] = Number(do_kinh_value[i].value);
        } else {
            du_lieu_day_du = false;
            break;
        }
    }

    if (do_vi_direction != null && do_kinh_direction != null) {
        vi_tri_vi_do = do_vi_direction.value;
        vi_tri_kinh_do = do_kinh_direction.value;
    } else {
        du_lieu_day_du = false;
    }

    if (
        test1_do_vi[0] > 180 ||
        test1_do_vi[0] < 0 ||
        test1_do_kinh[0] > 180 ||
        test1_do_kinh[0] < 0
    ) {
        du_lieu_hop_le = false;
    }
    if (
        test1_do_vi[1] > 60 ||
        test1_do_vi[1] < 0 ||
        test1_do_kinh[1] > 60 ||
        test1_do_kinh[1] < 0
    ) {
        du_lieu_hop_le = false;
    }
    if (
        test1_do_vi[2] > 60 ||
        test1_do_vi[2] < 0 ||
        test1_do_kinh[2] > 60 ||
        test1_do_kinh[2] < 0
    ) {
        du_lieu_hop_le = false;
    }

    if (du_lieu_day_du === false) {
        alert("Vui lòng nhập đầy đủ dữ liệu để chia mảnh");
        return;
    }
    if (du_lieu_hop_le === false) {
        alert("Vui lòng nhập dữ liệu hợp lệ để chia mảnh");
        return;
    }

    test1_do_kinh_second = convert_from_degree_to_second(test1_do_kinh);
    test1_do_vi_second = convert_from_degree_to_second(test1_do_vi);

    // Chia lấy độ thập phân của WGS84 do vị trí điểm của WGS84 với vị trí điểm của tọa độ địa lý như nhau
    if (vi_tri_kinh_do === "T") {
        geometry_wgs84_x.value = (-test1_do_kinh_second / 3600).toFixed(8);
    } else if (vi_tri_kinh_do === "D") {
        geometry_wgs84_x.value = (test1_do_kinh_second / 3600).toFixed(8);
    }

    if (vi_tri_vi_do === "N") {
        geometry_wgs84_y.value = (-test1_do_vi_second / 3600).toFixed(8);
    } else if (vi_tri_vi_do === "B") {
        geometry_wgs84_y.value = (test1_do_vi_second / 3600).toFixed(8);
    }
    //

    // Do kinh tuyến chia thành 60 phần đánh dấu từ kinh tuyến 180 độ Tây về Đông
    if (vi_tri_kinh_do === "T") {
        test1_do_kinh_second =
            convert_from_degree_to_second([180, 0, 0]) - test1_do_kinh_second;
    }

    if (he_toa_do_click === "hn_72") {
        tree_hn_72.classList.remove("hide_tree");
        tree_vn2000.classList.add("hide_tree");
        tree_utm_qt.classList.add("hide_tree");
    } else if (he_toa_do_click === "vn2000") {
        tree_hn_72.classList.add("hide_tree");
        tree_vn2000.classList.remove("hide_tree");
        tree_utm_qt.classList.add("hide_tree");
    } else {
        tree_hn_72.classList.add("hide_tree");
        tree_vn2000.classList.add("hide_tree");
        tree_utm_qt.classList.remove("hide_tree");
    }

    luu_so_lieu_manh();
}
