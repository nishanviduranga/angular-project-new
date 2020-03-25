import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { BasicAuthHtppInterceptorServiceService } from './basic-auth-htpp-interceptor-service.service';

describe('BasicAuthHtppInterceptorServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BasicAuthHtppInterceptorServiceService = TestBed.get(BasicAuthHtppInterceptorServiceService);
    expect(service).toBeTruthy();
  });
});
