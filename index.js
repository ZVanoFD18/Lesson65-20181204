var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var App = /** @class */ (function () {
    function App() {
    }
    App.run = function () {
        var msg = 'Введите № задачи для выполнения:'
            + '\n0 - выход'
            + '\n1 - Реализовать паттерн "Абстрактная фабрика".'
            + '\n2 - Реализовать паттерн "Фабричный метод".'
            + '\n3 - Реализовать паттерн "Прототип".';
        exit0: while (true) {
            var taskN = +prompt(msg, '1');
            console.log('-----' + taskN + '-----');
            switch (taskN) {
                case 0:
                    break exit0;
                    break;
                case 1:
                    doTask1();
                    break;
                case 2:
                    doTask2();
                    break;
                case 3:
                    doTask3();
                    break;
            }
            alert('Выполнено. Результат в консоли.');
            console.log('-----END-----');
        }
        /**
         * Задача 1. Реализовать паттерн "Абстрактная фабрика".
         * 1. Накидываем фабрики в массив "carFactories".
         * 2. Перебирам фабрики в цикле и создаем по одному автомобилю с компонентами фабрики.
         * Автомобили добавляем в массив "cars".
         * 3. Выводим в консоль информацию о автомобилях.
         */
        function doTask1() {
            var carFactories = [
                new Task1.VazFactory(),
                new Task1.ZazFactory()
            ];
            var cars = [];
            carFactories.forEach(function (carFactory) {
                var engine = carFactory.createEngine();
                var body = carFactory.createBody();
                var wheel = carFactory.createWheel();
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
            var carCreators = [
                new Task2.Vaz2101Creator(),
                new Task2.Vaz2102Creator(),
                new Task2.Zaz968Creator()
            ];
            var cars = [];
            carCreators.forEach(function (carCreator) {
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
        function doTask3() {
            var carsOrig = [
                new Task3.CarVaz2101(),
                new Task3.CarVaz2102(),
                new Task3.CarZaz999()
            ], carsCloned = [];
            carsOrig.forEach(function (car) {
                var clone = car.clone();
                clone.brand += ' - я клон';
                carsCloned.push(clone);
            });
            console.log('Оригиналы', carsOrig);
            console.log('Клоны', carsCloned);
        }
    };
    return App;
}());
var Task1;
(function (Task1) {
    ;
    ;
    ;
    /**
     * Класс "автомобиль", который в конструкторе принимает комплектующие и формирует автомобиль.
     * Этому классу без разницы из каких комплектующих компоновать автомобиль, главное чтобы они
     * соответствовали интерфейсу.
     */
    var Car = /** @class */ (function () {
        function Car(engine, body, Wheel) {
            this.engine = engine;
            this.body = body;
            this.Wheel = Wheel;
        }
        return Car;
    }());
    Task1.Car = Car;
})(Task1 || (Task1 = {}));
// import {ICarEngine, ICarBody, ICarWheel, ICarFactory} from './Base';
var Task1;
(function (Task1) {
    var VazEngine = /** @class */ (function () {
        function VazEngine() {
        }
        VazEngine.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        VazEngine.prototype.getName = function () {
            return this.name;
        };
        ;
        return VazEngine;
    }());
    var VazBody = /** @class */ (function () {
        function VazBody() {
        }
        VazBody.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        VazBody.prototype.getName = function () {
            return this.name;
        };
        ;
        return VazBody;
    }());
    var VazWheel = /** @class */ (function () {
        function VazWheel() {
        }
        VazWheel.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        VazWheel.prototype.getName = function () {
            return this.name;
        };
        ;
        return VazWheel;
    }());
    var VazFactory = /** @class */ (function () {
        function VazFactory() {
            this.name = 'Фабрика ВАЗ';
        }
        VazFactory.prototype.createEngine = function () {
            var engine = new VazEngine();
            engine.setName('ВАЗ-Двигатель');
            return engine;
        };
        ;
        VazFactory.prototype.createBody = function () {
            var body = new VazBody();
            body.setName('ВАЗ-Кузов');
            return body;
        };
        ;
        VazFactory.prototype.createWheel = function () {
            var Wheel = new VazBody();
            Wheel.setName('ВАЗ-Колесо');
            return Wheel;
        };
        ;
        return VazFactory;
    }());
    Task1.VazFactory = VazFactory;
})(Task1 || (Task1 = {}));
// import {ICarEngine, ICarBody, ICarWheel, ICarFactory} from './Base';
var Task1;
(function (Task1) {
    var ZazEngine = /** @class */ (function () {
        function ZazEngine() {
        }
        ZazEngine.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        ZazEngine.prototype.getName = function () {
            return this.name;
        };
        ;
        return ZazEngine;
    }());
    var ZazBody = /** @class */ (function () {
        function ZazBody() {
        }
        ZazBody.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        ZazBody.prototype.getName = function () {
            return this.name;
        };
        ;
        return ZazBody;
    }());
    var ZazWheel = /** @class */ (function () {
        function ZazWheel() {
        }
        ZazWheel.prototype.setName = function (name) {
            this.name = name;
        };
        ;
        ZazWheel.prototype.getName = function () {
            return this.name;
        };
        ;
        return ZazWheel;
    }());
    var ZazFactory = /** @class */ (function () {
        function ZazFactory() {
            this.name = 'Фабрика ЗАЗ';
        }
        ZazFactory.prototype.createEngine = function () {
            var engine = new ZazEngine();
            engine.setName('ЗАЗ-Двигатель');
            return engine;
        };
        ;
        ZazFactory.prototype.createBody = function () {
            var body = new ZazBody();
            body.setName('ЗАЗ-Кузов');
            return body;
        };
        ;
        ZazFactory.prototype.createWheel = function () {
            var Wheel = new ZazBody();
            Wheel.setName('ЗАЗ-Колесо');
            return Wheel;
        };
        ;
        return ZazFactory;
    }());
    Task1.ZazFactory = ZazFactory;
})(Task1 || (Task1 = {}));
var Task2;
(function (Task2) {
    ;
    ;
})(Task2 || (Task2 = {}));
var Task2;
(function (Task2) {
    /**
     * Базовый интерфейс автомобиля.
     */
    var VazCar = /** @class */ (function () {
        function VazCar() {
        }
        return VazCar;
    }());
    Task2.VazCar = VazCar;
    ;
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ"
     * Предполагается, что "car.model"  будет переопределен в потомках, поэтому
     * класс не экспортируемый.
     */
    var VazCreator = /** @class */ (function () {
        function VazCreator() {
        }
        VazCreator.prototype.createCar = function () {
            var car = new VazCar();
            car.brand = 'ВАЗ';
            car.model = '@TODO: переопредели меня в потомках';
            return car;
        };
        ;
        return VazCreator;
    }());
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ" и модели "2101".
     */
    var Vaz2101Creator = /** @class */ (function (_super) {
        __extends(Vaz2101Creator, _super);
        function Vaz2101Creator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Vaz2101Creator.prototype.createCar = function () {
            var car = _super.prototype.createCar.call(this);
            car.model = '2101';
            return car;
        };
        ;
        return Vaz2101Creator;
    }(VazCreator));
    Task2.Vaz2101Creator = Vaz2101Creator;
    ;
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ВАЗ" и модели "2102".
     */
    var Vaz2102Creator = /** @class */ (function (_super) {
        __extends(Vaz2102Creator, _super);
        function Vaz2102Creator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Vaz2102Creator.prototype.createCar = function () {
            var car = _super.prototype.createCar.call(this);
            car.model = '2102';
            return car;
        };
        ;
        return Vaz2102Creator;
    }(VazCreator));
    Task2.Vaz2102Creator = Vaz2102Creator;
    ;
})(Task2 || (Task2 = {}));
var Task2;
(function (Task2) {
    /**
     * Базовый интерфейс автомобиля.
     */
    var ZazCar = /** @class */ (function () {
        function ZazCar() {
        }
        return ZazCar;
    }());
    Task2.ZazCar = ZazCar;
    ;
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ЗАЗ"
     * Предполагается, что "car.model"  будет переопределен в потомках, поэтому
     * класс не экспортируемый.
     */
    var ZazCreator = /** @class */ (function () {
        function ZazCreator() {
        }
        ZazCreator.prototype.createCar = function () {
            var car = new ZazCar();
            car.brand = 'ЗАЗ';
            car.model = '@TODO: переопредели меня в потомках';
            return car;
        };
        ;
        return ZazCreator;
    }());
    /**
     * Реализация фабричного метода для конструирования автомобилей марки "ЗАЗ" и модели "968".
     */
    var Zaz968Creator = /** @class */ (function (_super) {
        __extends(Zaz968Creator, _super);
        function Zaz968Creator() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Zaz968Creator.prototype.createCar = function () {
            var car = _super.prototype.createCar.call(this);
            car.model = '968';
            return car;
        };
        ;
        return Zaz968Creator;
    }(ZazCreator));
    Task2.Zaz968Creator = Zaz968Creator;
    ;
})(Task2 || (Task2 = {}));
var Task3;
(function (Task3) {
    ;
    /**
     * Базовый класс для объектов "Автомобиль".
     */
    var Car = /** @class */ (function () {
        function Car() {
        }
        // __proto__;
        /**
         * Базовый метод клонирования.
         * Использует родной для JavaScript механизм прототипирования.
         */
        Car.prototype.clone = function () {
            //let car = {}; // - error TS2339: Property '__proto__' does not exist on type 'Car'.
            var car = Object.create(Car);
            //let car = new Car();
            car.__proto__ = this;
            // car.brand = carOrig.brand;
            // car.model = carOrig.model;
            return car;
        };
        return Car;
    }());
    ;
    var CarVaz2101 = /** @class */ (function (_super) {
        __extends(CarVaz2101, _super);
        function CarVaz2101() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.brand = 'ВАЗ';
            _this.model = '2101';
            return _this;
        }
        return CarVaz2101;
    }(Car));
    Task3.CarVaz2101 = CarVaz2101;
    var CarVaz2102 = /** @class */ (function (_super) {
        __extends(CarVaz2102, _super);
        function CarVaz2102() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.brand = 'ВАЗ';
            _this.model = '2102';
            return _this;
        }
        return CarVaz2102;
    }(Car));
    Task3.CarVaz2102 = CarVaz2102;
    var CarZaz999 = /** @class */ (function (_super) {
        __extends(CarZaz999, _super);
        function CarZaz999() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.brand = 'ЗАЗ';
            _this.model = '999';
            return _this;
        }
        /**
         * Тут мы переопределяем базовый метод клонирования и делаем так, как сказано
         * в википедии, а именно копируем свойства поштучно.
         */
        CarZaz999.prototype.clone = function () {
            var car = Object.create(Car);
            car.brand = this.brand;
            car.model = this.model;
            return car;
        };
        return CarZaz999;
    }(Car));
    Task3.CarZaz999 = CarZaz999;
})(Task3 || (Task3 = {}));
