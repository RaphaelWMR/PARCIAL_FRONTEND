import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { ActivatedRoute, Router } from '@angular/router';
import { Alumno } from '../../../../shared/apis/api-fisibienestar/interfaces/alumno'; 
import { AlumnoService } from '../../../../shared/apis/api-fisibienestar/services/alumno/alumno.service'; 
import { GetDataAlumnoService } from '../../../../shared/apis/api-getdataalumno/services/get-data-alumno.service'; 
import { AlumnoWS } from '../../../../shared/apis/api-getdataalumno/interfaces/alumnoWS'; 
@Component({
  selector: 'app-add-edit-alumno',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './add-edit-alumno.component.html',
  styleUrl: './add-edit-alumno.component.css'
})
export class AddEditAlumnoComponent {
  form: FormGroup;
  id: number;
  operacion: string = 'Agregar ';
  constructor
    (private router: Router,
      private fb: FormBuilder,
      private _alumnoService: AlumnoService,
      private _getDataAlumnoService: GetDataAlumnoService,
      private aRouter: ActivatedRoute
    ) {
    this.form = this.fb.group({
      alumno_primerApellido: ['', Validators.required],
      alumno_segundoApellido: ['', Validators.required],
      alumno_nombres: ['', Validators.required],
      alumno_dni: ['', Validators.required],
      alumno_codigo: ['', Validators.required],
      alumno_telefono: ['', Validators.required],
      alumno_correoElectronico: ['', Validators.required],
    });
    this.id = Number(aRouter.snapshot.paramMap.get('id'));
  }

  ngOnInit(): void {
    if (this.id != 0) {
      // Edit
      this.operacion = 'Editar ';
      this.getAlumno(this.id);
    }
  }


  addAlumno() {
    const alumno: Alumno = {
      marca: this.form.value.alumno_primerApellido,
      modelo: this.form.value.alumno_segundoApellido,
      estado: this.form.value.alumno_nombres,
      anio: this.form.value.alumno_dni,
      vendedor_id: this.form.value.alumno_codigo,
      observaciones: this.form.value.alumno_telefono,
      precio: this.form.value.alumno_correoElectronico,
    
    }

    if (this.id !== 0) {
      //editar
      alumno.id = this.id;
      this._alumnoService.updateAlumno(this.id, alumno).subscribe(() => {
        console.log('Alumno actualizado');
        this.router.navigate(['/alumnos']);
      })
    } else {
      //agregar
      this._alumnoService.saveAlumno(alumno).subscribe(() => {
        console.log('Alumno agregado');
        this.router.navigate(['/alumnos']);
      })

    };
  }
  getAlumno(id: Number) {
    this._alumnoService.getAlumno(id).subscribe((data: Alumno) => {
      console.log(data);
      this.form.setValue({
        marca: data.marca,
        modelo: data.modelo,
        estado: data.estado,
        anio: data.anio,
        vendedor_id: data.vendedor_id,
        observaciones: data.observaciones,
        precio: data.precio,
      })
    })
  }

  getDataAlumno() {
    this._getDataAlumnoService.getDataAlumno(this.form.value.alumno_codigo ?? 0).subscribe((data: AlumnoWS) => {
      console.log("Data: ", data);
      this.form.setValue({
        marca: data.alumno_primerApellido,
        modelo: data.alumno_segundoApellido,
        estado: data.alumno_nombres,
        anio: data.alumno_dni,
        vendedor_id: data.alumno_codigo,
        observaciones: null,
        precio: data.alumno_correoElectronico,
      })
    })
  }
}

