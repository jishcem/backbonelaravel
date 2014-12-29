<?php 

class TasksTableSeeder extends DatabaseSeeder {

	public function run()
	{
		DB::table("tasks")->delete();

		foreach (range(1, 3) as $key => $value) {
			Task::create([ 'title' => 'title '.$value ]);
		}
	}

}