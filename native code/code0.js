gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.GDStartButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDStartButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTextObjects2= [];

gdjs.Untitled_32sceneCode.conditionTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_0 = {val:false};
gdjs.Untitled_32sceneCode.conditionTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition0IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition1IsTrue_1 = {val:false};
gdjs.Untitled_32sceneCode.condition2IsTrue_1 = {val:false};


gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.Untitled_32sceneCode.GDStartButtonObjects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.Untitled_32sceneCode.GDStartButtonObjects1);

gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = false;
gdjs.Untitled_32sceneCode.condition1IsTrue_0.val = false;
{
gdjs.Untitled_32sceneCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Untitled_32sceneCode.mapOfGDgdjs_46Untitled_9532sceneCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.Untitled_32sceneCode.condition0IsTrue_0.val ) {
{
{gdjs.Untitled_32sceneCode.conditionTrue_1 = gdjs.Untitled_32sceneCode.condition1IsTrue_0;
gdjs.Untitled_32sceneCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8631156);
}
}}
if (gdjs.Untitled_32sceneCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.openURL(gdjs.evtsExt__Choose__RandomString.func(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), runtimeScene);
}}

}


{


{
}

}


{


{
}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDStartButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDStartButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTextObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);
return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
