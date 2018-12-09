// import {ICarEngine, ICarBody, ICarWheel, ICarFactory} from './Base';
namespace Task1 {
    class ZazEngine implements ICarEngine {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    class ZazBody implements ICarBody {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    class ZazWheel implements ICarWheel {
        name: string;

        setName(name: string) {
            this.name = name;
        };

        getName(): string {
            return this.name;
        };
    }

    export class ZazFactory implements ICarFactory {
        name : string = 'Фабрика ЗАЗ';
        createEngine(): ICarEngine {
            let engine = new ZazEngine();
            engine.setName('ЗАЗ-Двигатель');
            return engine;
        };

        createBody(): ICarBody {
            let body = new ZazBody();
            body.setName('ЗАЗ-Кузов');
            return body;
        };

        createWheel(): ICarWheel {
            let Wheel = new ZazBody();
            Wheel.setName('ЗАЗ-Колесо');
            return Wheel;
        };
    }
}