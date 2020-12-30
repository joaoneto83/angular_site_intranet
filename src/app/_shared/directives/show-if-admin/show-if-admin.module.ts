import { NgModule } from "@angular/core";
import { ShowIfAdminDirective } from "./show-if-admin.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [ShowIfAdminDirective],
    exports: [ShowIfAdminDirective],
    imports: [CommonModule]
})
export class ShowIfAdminModule {}