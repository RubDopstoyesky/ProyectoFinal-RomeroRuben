/*Ruben Dopstoyesky*/
const albumesArray = [
    {
        id: 1,
        nombre: "Pablo Honey",
        precio: 250,
        img: "https://i.discogs.com/Y734zQvVbXxI4HzRykyCn2CA-T8Fvb1LQHpFp1IE3h8/rs:fit/g:sm/q:90/h:589/w:596/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQyNTU0/Mi0xMjU4NDIxNjAz/LmpwZWc.jpeg",
        cantidad: 1,
    },
    {
        id: 2,
        nombre: "The Bends",
        precio: 200,
        img: "https://i.discogs.com/i6MXaXRBfHBSPzqpEXlpts2oGlGYFUaoZDW-OFPVBo4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTM2ODEx/Ni0xNTg4ODgzOTM2/LTgyNDcuanBlZw.jpeg",
        cantidad: 1,
    },
    {
        id: 3,
        nombre: "Ok Computer",
        precio: 300,
        img: "https://i.discogs.com/F_KSyKjGi2YN5SBttMhdgP2zyNdmHv7HHWvDVGj3Shg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ5NTA3/OTgtMTM4ODYyMzYx/MS0yMzYyLmpwZWc.jpeg",
        cantidad: 1,
    },
    {
        id: 4,
        nombre: "Kid A",
        precio: 250,
        img: "https://i.discogs.com/_zg0Us0N_anqCz9hJvFGeRK2v69eDDCxQnHkd7RcgTk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTc0NzQz/LTE1NDg5MDI2NDMt/Mzg2OS5qcGVn.jpeg",
        cantidad: 1,
    },
    {
        id: 5,
        nombre: "Amnesiac",
        precio: 100,
        img: "https://i.discogs.com/yHRIDUJ6o02jXnZneAyngGLuW_SWH133z5oED0c2__4/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI2NzEz/My0xMjQ2OTE3NDM3/LmpwZWc.jpeg",
        cantidad: 1,
    },
    {
        id: 6,
        nombre: "Hail tho the Thief",
        precio: 100,
        img: "https://i.discogs.com/SZIBiaSFfu4GwIJd4XLYPLGwVo6688kMfSluNT6Ibhw/rs:fit/g:sm/q:90/h:597/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTE2MjMx/MS0xNTg2OTQxMTYy/LTM4ODMuanBlZw.jpeg",
        cantidad: 1,
    },
    {
        id: 7,
        nombre: "In Rainbows",
        precio: 300,
        img: "https://i.discogs.com/M_QmofVfPwV_7Rc6z17_FqKtnvo26WMVF2_TMjBLQ_E/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNzQy/OTYtMTM2MzQzNDA3/My0yMjY1LmpwZWc.jpeg",
        cantidad: 1,
    },
    {
        id: 8,
        nombre: "The King of Limbs",
        precio: 100,
        img: "https://i.discogs.com/Z_rMVYKbn9IEhp688mQmUa3rXg_4AQeKi_uK9KF4GIg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4NTEw/MjUtMTQ2MjY3Mjcw/MC0zNTQ0LmpwZWc.jpeg",
        cantidad: 1,
    },
];
const JsonArray = JSON.stringify(albumesArray);
console.log(JsonArray);