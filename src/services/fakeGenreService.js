export const genres = [
	{_id: "5d2d2d54g5bb2g5h8885j8u512s2swww" , name:"Action"},
	{_id: "5d2d2d54g5bb2g5h5j8u512s2ssss" , name:"Comedy"},
	{_id: "5d2d2d54g5bb2g5h5j8u512s2sooo" , name:"Animation"},
	{_id: "5d2d2d54g5bb2g5h5j8u512s2saaa" , name:"Adventure"},
];

export function getGenres() {
	return genres.filter(g=>g);
};