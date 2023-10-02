"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDController = void 0;
class CRUDController {
    constructor(service) {
        this.itemService = service;
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const createdItem = yield this.itemService.create(req.body);
                res.json(createdItem);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const allItems = yield this.itemService.getAll();
                res.json({ allItems });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getByID(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const oneItem = yield this.itemService.getItemById(Number(req.params.id)); //добавить проверку на число
                res.json(oneItem);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const isSuccess = yield this.itemService.deleteItem(req.body.id);
                isSuccess ? res.status(201).json(true) : res.status(500).json(false);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                req.body.id = req.params.id; // добавить проверку на число
                const updatedItem = yield this.itemService.update(req.body);
                res.json(updatedItem);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.CRUDController = CRUDController;
