#include <iostream>
using namespace std;
int main(){
    int n;
    int m ,e;
    
    cout<<"enter rows and collumn";
    cin>> n>>m;
    int arr[n][m];
    
    
    for (int i = 0; i < n; i++)
    {
        for (int j = 0;j < m; j++)
        {
            int e;
            cin>>e;
            arr[i][j] = e;
            // arr[0][0]= e;
        }
    

    };
    cout<<endl ;

    for (int i = 0; i < n; i++)
    {
       for (int j = 0; j < m; j++)
       {
        cout<<arr[i][j]<<" ";

       }
       cout<<endl;
    }
    
    // cout<<arr[0][0];
    
    
    }