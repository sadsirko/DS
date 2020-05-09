
#include <iostream>
#include <math.h>
#include <fstream>
using namespace std;

 

double DoubleRand(double _max, double _min)
    { 
    	return _min + double(rand()) / RAND_MAX * (_max - _min);
    	 }

int main()
{
	int g = 12;
	remove("matrix.js");
    ofstream fout("matrix.js"); // создаём объект класса ofstream для записи и связываем его с файлом cppstudio.txt

srand(9521);
fout << "let arrN =    [\n"	;
for(int j = 0;j < g;j++){
	fout << " [ "	;

for(int i = 0;i < g;i++) {
    double b = DoubleRand(0,1);
    double c = DoubleRand(0,1);
    fout  << floor((1.0 - 2 * 0.01 - 1 * 0.005 - 0.05) * (b + c))  ;
    if( i < g - 1 ) fout  << ", " ;
    }
    fout <<" ] ";
    if( j < g - 1 ) fout  << ",\n " ;
  
}
fout <<" ] ;\n";


fout << "let weight =    [\n"	;
for(int j = 0;j < g;j++){
	fout << " [ "	;

for(int i = 0;i < g;i++) {
    double n = DoubleRand(0,1);
    fout  << round(n*100)  ;
    if( i < g - 1 ) fout  << ", " ;
    }
    fout <<" ] ";
    if( j < g - 1 ) fout  << ",\n " ;
  
}
fout <<" ]; \n";
fout.close(); // закрываем файл

    system("pause");
    
return 0;
}