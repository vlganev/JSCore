function constructionCrew(worker) {
	if (worker.handsShaking) {
		worker.bloodAlcoholLevel += Number(worker.experience) * Number(worker.weight) * 0.1;
		worker.handsShaking = false;
	}
	
	return worker;
}