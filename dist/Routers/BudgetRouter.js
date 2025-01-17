"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetRouter = void 0;
const express_1 = __importDefault(require("express"));
const BudgetController = __importStar(require("../Controllers/BudgetController"));
const BudgetRouter = express_1.default.Router();
exports.BudgetRouter = BudgetRouter;
BudgetRouter.get('/budget/:groupId', BudgetController.showBudget);
BudgetRouter.get('/budget/search/:groupId/:searchKey', BudgetController.getBudgetSearch);
BudgetRouter.get('/budget/sub/:groupId/:categoryName', BudgetController.showSubCategories);
BudgetRouter.get('/budget/calc/:groupId', BudgetController.getFinalAdjustment);
BudgetRouter.get('/budget/calcbudget/:groupId', BudgetController.getAdjforBudget);
BudgetRouter.get('/budget/category/search/:groupId/:category', BudgetController.getBudgetSearchByCategory);
BudgetRouter.post('/budget/:groupId/:userId', BudgetController.createBudget);
BudgetRouter.post('/budget/subcat/:groupId/:categoryId', BudgetController.createsubCategory);
BudgetRouter.patch('/budget/:budgetId', BudgetController.updateBudget);
BudgetRouter.delete('/budget/:budgetId', BudgetController.deleteBudget);
//# sourceMappingURL=BudgetRouter.js.map