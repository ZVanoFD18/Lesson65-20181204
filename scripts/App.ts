class App {
    static run() {
        let msg = 'Введите № задачи для выполнения:'
            + '\n0 - выход'
            + '\n1 - Реализовать паттерн "Абстрактная фабрика".'
            + '\n2 - Реализовать паттерн "Фабричный метод".'
            + '\n3 - Реализовать паттерн "Прототип".'
        ;
        exit0:while (true) {
            let taskN = +prompt(msg, '1');
            console.log('-----' + taskN + '-----')
            switch (taskN) {
                case 0 :
                    break exit0;
                    break;
                case 1 :
                    doTask1();
                    break;
                case 2 :
                    doTask2();
                    break;
                case 3 :
                    doTask3();
                    break;
            }
            alert('Выполнено. Результат в консоли.')
            console.log('-----END-----')
        }

        /**
         * Задача 1. Реализовать паттерн "Абстрактная фабрика".
         * 1. Накидываем фабрики в массив "carFactories".
         * 2. Перебирам фабрики в цикле и создаем по одному автомобилю с компонентами фабрики.
         * Автомобили добавляем в массив "cars".
         * 3. Выводим в консоль информацию о автомобилях.
         */
        function doTask1() {
            let carFactories = [
                new Task1.VazFactory(),
                new Task1.ZazFactory()
            ];
            let cars = [];
            carFactories.forEach((carFactory) => {
                let engine = carFactory.createEngine();
                let body = carFactory.createBody();
                let wheel = carFactory.createWheel();
                cars.push({
                    factory: carFactory,
                    car: new Task1.Car(engine, body, wheel)
                });
            });
            console.log(cars);
        }
        /**
         * Задача 2. Реализовать паттерн "Фабричный метод".
         * 1. Накидываем фабричные методы в массив "carCreators".
         * 2. Перебирам фабричные методы и создаем по одному автомобилю.
         * Автомобили добавляем в массив "cars".
         * 3. Выводим в консоль информацию о автомобилях.
         */
        function doTask2() {
            let carCreators = [
                new Task2.Vaz2101Creator(),
                new Task2.Vaz2102Creator(),
                new Task2.Zaz968Creator()
            ];
            let cars = [];
            carCreators.forEach((carCreator) => {
                cars.push(carCreator.createCar());
            });
            console.log(cars);
        }
        /**
         * Задача 3. Реализовать паттерн "Прототип".
         * 1. Создаем оригиналы объектов в массив "carsOrig".
         * 2. Перебирам оригиналы и создаем клоны, которые записываем в массив "carsCloned".
         * При этом модифицируем свойство "brand", чтобы потом убедиться в неизменности оригиналов.
         * 3. Выводим в консоль информацию об оригиналах и клонах.
         */
        function doTask3(){
            let carsOrig = [
                new Task3.CarVaz2101(),
                new Task3.CarVaz2102(),
                new Task3.CarZaz999()
            ], carsCloned = [];
            carsOrig.forEach((car)=>{
                let clone = car.clone();
                clone.brand += ' - я клон';
                carsCloned.push(clone);
            });
            console.log('Оригиналы', carsOrig);
            console.log('Клоны', carsCloned);
        }
    }
}