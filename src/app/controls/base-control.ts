import { Injectable, OnInit, Input, Directive } from '@angular/core';
import { FormGroup } from '@angular/forms';
import {  ViewModelProperty } from './controls.model';

@Directive()
@Injectable()
export abstract class BaseControl implements OnInit {
  @Input() viewModelProperty: ViewModelProperty;
  @Input() detailsForm: FormGroup;

  public controlType: string;
  public controlKey: string;
  public controlLabel: string;
  public controlValue: any;
  public controlOptions: [];
  public description: string;
  public record: [];

  ngOnInit() {
    this.controlType = this.viewModelProperty.schema.uiControlType;
    this.controlKey = this.viewModelProperty.key;
    this.controlLabel = this.viewModelProperty.schema['displayName'];
    this.controlValue = this.viewModelProperty.viewModelData[this.viewModelProperty.key];
    this.controlOptions= this.viewModelProperty.schema.arrayOfRecord;
    this.description = this.viewModelProperty.schema.description;
    this.record = this.viewModelProperty.schema.data;
  }
}
