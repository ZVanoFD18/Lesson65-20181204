// import {ICarEngine, ICarBody, ICarWheel, ICarFactory} from './Base';
namespace Task1 {
    class VazEngine implements ICarEngine {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    class VazBody implements ICarBody {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    class VazWheel implements ICarWheel {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    export class VazFactory implements ICarFactory {
        name : string = 'Фабрика ВАЗ';
        createEngine(): ICarEngine {
            let engine = new VazEngine();
            engine.setName('ВАЗ-Двигатель');
            return engine;
        };

        createBody(): ICarBody {
            let body = new VazBody();
            body.setName('ВАЗ-Кузов');
            return body;
        };

        createWheel(): ICarWheel {
            let Wheel = new VazBody();
            Wheel.setName('ВАЗ-Колесо');
            return Wheel;
        };
    }
}