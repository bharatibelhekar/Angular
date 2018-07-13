import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }

  GetBookDetails()
{
  return [
    {"Name":"Javascript", "Price":300, "Author":"Steve","No Of Pages":967},
    {"Name":"C", "Price":400, "Author":"Mac","No Of Pages":500},
    {"Name":"C++", "Price":500, "Author":"Win","No Of Pages":356},
    {"Name":"Angular", "Price":350, "Author":"John","No Of Pages":1130},
    {"Name":"Java", "Price":600, "Author":"Smith","No Of Pages":210},
        ];
}

}
