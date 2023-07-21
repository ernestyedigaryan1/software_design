abstract class Shipper {
    abstract calculateCost(weight: number): number;
}

class AirEast implements Shipper {
    calculateCost(weight: number): number {
        return 0.39 * weight;
    }
}

class ChicagoSprint implements Shipper {
    calculateCost(weight: number): number {
        return 0.42 * weight;
    }
}

class PacificParcel implements Shipper {
    calculateCost(weight: number): number {
        return 0.51 * weight;
    }
}

export default class Shipment {
    static uniqueId = 1;

    shipmentId: number;
    weight: number;
    fromAddress: string;
    fromZipCode: string;
    toAddress: string;
    toZipCode: string;
    shipper: Shipper;

    constructor(
        shipmentId: number,
        weight: number,
        fromAddress: string,
        fromZipCode: string,
        toAddress: string,
        toZipCode: string
    ) {
        this.shipmentId = shipmentId !== 0 ? shipmentId : Shipment.getShipmentId();
        this.weight = weight;
        this.fromAddress = fromAddress;
        this.fromZipCode = fromZipCode;
        this.toAddress = toAddress;
        this.toZipCode = toZipCode;
        this.shipper = this.getShipper(fromZipCode);
    }

    static getShipmentId(): number {
        const newId = Shipment.uniqueId;
        Shipment.uniqueId += 1;
        return newId;
    }

    getShipper(fromZipCode: string): Shipper {
        const firstDigit = parseInt(fromZipCode[0], 10);
        if (firstDigit === 1 || firstDigit === 2 || firstDigit === 3) {
            return new AirEast();
        } else if (firstDigit === 4 || firstDigit === 5 || firstDigit === 6) {
            return new ChicagoSprint();
        } else {
            return new PacificParcel();
        }
    }

    ship() {
        const cost = this.shipper.calculateCost(this.weight);
        const shippingInfo = `Shipment with the ID ${this.shipmentId} will be picked up from ${this.fromAddress}, ${this.fromZipCode} and shipped to ${this.toAddress}, ${this.toZipCode}\nCost = ${cost}`;
        console.log(shippingInfo);
    }
}
